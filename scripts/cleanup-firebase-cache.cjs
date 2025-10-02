/**
 * Firebase Cache Cleanup Script
 * Reduces Firebase quota usage by cleaning up old/unused cached prompts
 * Product of Bradley Virtual Solutions, LLC
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin
const serviceAccountPath = path.join(__dirname, '../dreambuild-2024-app-firebase-adminsdk.json');

if (!fs.existsSync(serviceAccountPath)) {
  console.error('❌ Service account key not found!');
  console.log('📝 Please download it from:');
  console.log('   https://console.firebase.google.com/project/dreambuild-2024-app/settings/serviceaccounts/adminsdk');
  console.log('   Save as: dreambuild-2024-app-firebase-adminsdk.json');
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

console.log('🧹 Firebase Cache Cleanup Tool\n');
console.log('═'.repeat(80) + '\n');

// Cleanup strategies
const strategies = {
  // Strategy 1: Delete entries with low usage (used < 2 times)
  async deleteLowUsage(dryRun = true) {
    console.log('📊 Strategy 1: Delete Low-Usage Entries (< 2 uses)\n');
    
    const snapshot = await db.collection('cached_prompts')
      .where('usageCount', '<', 2)
      .get();
    
    console.log(`Found ${snapshot.size} low-usage entries`);
    
    if (!dryRun && snapshot.size > 0) {
      const batch = db.batch();
      let count = 0;
      
      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
        count++;
        
        // Commit in batches of 500
        if (count % 500 === 0) {
          console.log(`  Deleting batch ${count / 500}...`);
        }
      });
      
      await batch.commit();
      console.log(`✅ Deleted ${count} low-usage entries\n`);
    } else {
      console.log(`⚠️  Dry run - would delete ${snapshot.size} entries\n`);
    }
    
    return snapshot.size;
  },

  // Strategy 2: Delete old entries (> 30 days old)
  async deleteOldEntries(dryRun = true, daysOld = 30) {
    console.log(`📊 Strategy 2: Delete Old Entries (> ${daysOld} days)\n`);
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const snapshot = await db.collection('cached_prompts')
      .where('createdAt', '<', cutoffDate)
      .get();
    
    console.log(`Found ${snapshot.size} old entries (before ${cutoffDate.toLocaleDateString()})`);
    
    if (!dryRun && snapshot.size > 0) {
      const batch = db.batch();
      let count = 0;
      
      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
        count++;
        
        if (count % 500 === 0) {
          console.log(`  Deleting batch ${count / 500}...`);
        }
      });
      
      await batch.commit();
      console.log(`✅ Deleted ${count} old entries\n`);
    } else {
      console.log(`⚠️  Dry run - would delete ${snapshot.size} entries\n`);
    }
    
    return snapshot.size;
  },

  // Strategy 3: Keep only top N most-used entries
  async keepTopUsed(dryRun = true, keepCount = 5000) {
    console.log(`📊 Strategy 3: Keep Top ${keepCount.toLocaleString()} Most-Used Entries\n`);
    
    // Get total count
    const allSnapshot = await db.collection('cached_prompts').count().get();
    const totalCount = allSnapshot.data().count;
    
    console.log(`Total entries: ${totalCount.toLocaleString()}`);
    
    if (totalCount <= keepCount) {
      console.log(`✅ Already under limit (${totalCount} <= ${keepCount})\n`);
      return 0;
    }
    
    const deleteCount = totalCount - keepCount;
    console.log(`Will delete: ${deleteCount.toLocaleString()} entries`);
    
    // Get entries sorted by usage (ascending) - these are the ones to delete
    const snapshot = await db.collection('cached_prompts')
      .orderBy('usageCount', 'asc')
      .orderBy('lastUsed', 'asc')
      .limit(deleteCount)
      .get();
    
    console.log(`Found ${snapshot.size} entries to delete`);
    
    if (!dryRun && snapshot.size > 0) {
      let count = 0;
      const batchSize = 500;
      
      for (let i = 0; i < snapshot.docs.length; i += batchSize) {
        const batch = db.batch();
        const batchDocs = snapshot.docs.slice(i, i + batchSize);
        
        batchDocs.forEach(doc => {
          batch.delete(doc.ref);
          count++;
        });
        
        await batch.commit();
        console.log(`  Deleted ${count}/${snapshot.size} entries...`);
      }
      
      console.log(`✅ Deleted ${count} entries, kept top ${keepCount}\n`);
    } else {
      console.log(`⚠️  Dry run - would delete ${snapshot.size} entries\n`);
    }
    
    return snapshot.size;
  },

  // Strategy 4: Smart cleanup - delete duplicates and low-value entries
  async smartCleanup(dryRun = true, targetCount = 10000) {
    console.log(`📊 Strategy 4: Smart Cleanup (Target: ${targetCount.toLocaleString()} entries)\n`);
    
    const allSnapshot = await db.collection('cached_prompts').count().get();
    const totalCount = allSnapshot.data().count;
    
    console.log(`Current total: ${totalCount.toLocaleString()}`);
    console.log(`Target: ${targetCount.toLocaleString()}`);
    console.log(`Need to delete: ${(totalCount - targetCount).toLocaleString()}\n`);
    
    if (totalCount <= targetCount) {
      console.log(`✅ Already at target\n`);
      return 0;
    }
    
    let deletedCount = 0;
    
    // Step 1: Delete entries with usage = 0
    console.log('Step 1: Deleting never-used entries...');
    const unusedSnapshot = await db.collection('cached_prompts')
      .where('usageCount', '==', 0)
      .get();
    
    console.log(`  Found ${unusedSnapshot.size} unused entries`);
    
    if (!dryRun && unusedSnapshot.size > 0) {
      let count = 0;
      for (let i = 0; i < unusedSnapshot.docs.length; i += 500) {
        const batch = db.batch();
        const batchDocs = unusedSnapshot.docs.slice(i, i + 500);
        batchDocs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        count += batchDocs.length;
        console.log(`  Deleted ${count}/${unusedSnapshot.size}...`);
      }
      deletedCount += count;
    } else {
      console.log(`  Dry run - would delete ${unusedSnapshot.size}`);
      deletedCount += unusedSnapshot.size;
    }
    
    // Step 2: Delete entries used only once, older than 7 days
    console.log('\nStep 2: Deleting old single-use entries...');
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const singleUseSnapshot = await db.collection('cached_prompts')
      .where('usageCount', '==', 1)
      .where('lastUsed', '<', sevenDaysAgo)
      .get();
    
    console.log(`  Found ${singleUseSnapshot.size} old single-use entries`);
    
    if (!dryRun && singleUseSnapshot.size > 0) {
      let count = 0;
      for (let i = 0; i < singleUseSnapshot.docs.length; i += 500) {
        const batch = db.batch();
        const batchDocs = singleUseSnapshot.docs.slice(i, i + 500);
        batchDocs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        count += batchDocs.length;
        console.log(`  Deleted ${count}/${singleUseSnapshot.size}...`);
      }
      deletedCount += count;
    } else {
      console.log(`  Dry run - would delete ${singleUseSnapshot.size}`);
      deletedCount += singleUseSnapshot.size;
    }
    
    // Step 3: If still over target, delete by lowest usage
    const currentCount = totalCount - deletedCount;
    if (currentCount > targetCount) {
      const remaining = currentCount - targetCount;
      console.log(`\nStep 3: Deleting ${remaining} lowest-used entries...`);
      
      const lowUsageSnapshot = await db.collection('cached_prompts')
        .orderBy('usageCount', 'asc')
        .orderBy('lastUsed', 'asc')
        .limit(remaining)
        .get();
      
      console.log(`  Found ${lowUsageSnapshot.size} entries to delete`);
      
      if (!dryRun && lowUsageSnapshot.size > 0) {
        let count = 0;
        for (let i = 0; i < lowUsageSnapshot.docs.length; i += 500) {
          const batch = db.batch();
          const batchDocs = lowUsageSnapshot.docs.slice(i, i + 500);
          batchDocs.forEach(doc => batch.delete(doc.ref));
          await batch.commit();
          count += batchDocs.length;
          console.log(`  Deleted ${count}/${lowUsageSnapshot.size}...`);
        }
        deletedCount += count;
      } else {
        console.log(`  Dry run - would delete ${lowUsageSnapshot.size}`);
        deletedCount += lowUsageSnapshot.size;
      }
    }
    
    console.log(`\n✅ Smart cleanup complete`);
    console.log(`   Total deleted: ${deletedCount.toLocaleString()}`);
    console.log(`   Final count: ${(totalCount - deletedCount).toLocaleString()}\n`);
    
    return deletedCount;
  },

  // Get current statistics
  async getStats() {
    console.log('📊 Current Cache Statistics\n');
    
    const snapshot = await db.collection('cached_prompts').get();
    const totalCount = snapshot.size;
    
    let usageCounts = {
      unused: 0,
      singleUse: 0,
      lowUse: 0,
      mediumUse: 0,
      highUse: 0
    };
    
    let oldEntries = 0;
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      const usage = data.usageCount || 0;
      
      if (usage === 0) usageCounts.unused++;
      else if (usage === 1) usageCounts.singleUse++;
      else if (usage < 5) usageCounts.lowUse++;
      else if (usage < 20) usageCounts.mediumUse++;
      else usageCounts.highUse++;
      
      if (data.createdAt && data.createdAt.toDate() < thirtyDaysAgo) {
        oldEntries++;
      }
    });
    
    console.log(`Total entries: ${totalCount.toLocaleString()}`);
    console.log(`\nUsage breakdown:`);
    console.log(`  Never used (0):        ${usageCounts.unused.toLocaleString()}`);
    console.log(`  Single use (1):        ${usageCounts.singleUse.toLocaleString()}`);
    console.log(`  Low use (2-4):         ${usageCounts.lowUse.toLocaleString()}`);
    console.log(`  Medium use (5-19):     ${usageCounts.mediumUse.toLocaleString()}`);
    console.log(`  High use (20+):        ${usageCounts.highUse.toLocaleString()}`);
    console.log(`\nAge:`);
    console.log(`  Older than 30 days:    ${oldEntries.toLocaleString()}`);
    console.log(`\nPotential savings:`);
    console.log(`  Delete unused:         ${usageCounts.unused.toLocaleString()}`);
    console.log(`  Delete single-use:     ${usageCounts.singleUse.toLocaleString()}`);
    console.log(`  Delete low-use:        ${usageCounts.lowUse.toLocaleString()}`);
    console.log(`  Total deletable:       ${(usageCounts.unused + usageCounts.singleUse + usageCounts.lowUse).toLocaleString()}`);
    console.log();
  }
};

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'stats';
  const dryRun = !args.includes('--execute');
  
  console.log(`Mode: ${dryRun ? '⚠️  DRY RUN (no changes will be made)' : '🔥 EXECUTE (will delete entries!)'}\n`);
  
  try {
    switch (command) {
      case 'stats':
        await strategies.getStats();
        break;
        
      case 'low-usage':
        await strategies.deleteLowUsage(dryRun);
        break;
        
      case 'old':
        const days = parseInt(args[1]) || 30;
        await strategies.deleteOldEntries(dryRun, days);
        break;
        
      case 'top':
        const keep = parseInt(args[1]) || 5000;
        await strategies.keepTopUsed(dryRun, keep);
        break;
        
      case 'smart':
        const target = parseInt(args[1]) || 10000;
        await strategies.smartCleanup(dryRun, target);
        break;
        
      default:
        console.log('❌ Unknown command\n');
        showHelp();
        process.exit(1);
    }
    
    console.log('✅ Cleanup complete!');
    
    if (dryRun) {
      console.log('\n💡 To execute changes, add --execute flag');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
  
  process.exit(0);
}

function showHelp() {
  console.log(`
Usage: node cleanup-firebase-cache.cjs <command> [options] [--execute]

Commands:
  stats              Show current cache statistics (default)
  low-usage          Delete entries with < 2 uses
  old <days>         Delete entries older than <days> (default: 30)
  top <count>        Keep only top <count> most-used entries (default: 5000)
  smart <target>     Smart cleanup to reach <target> entries (default: 10000)

Flags:
  --execute          Actually perform the deletion (default is dry run)

Examples:
  node cleanup-firebase-cache.cjs stats
  node cleanup-firebase-cache.cjs smart 10000
  node cleanup-firebase-cache.cjs smart 10000 --execute
  node cleanup-firebase-cache.cjs low-usage --execute
  node cleanup-firebase-cache.cjs old 60 --execute
  node cleanup-firebase-cache.cjs top 5000 --execute

Recommended approach:
  1. Run 'stats' to see what can be deleted
  2. Run 'smart 10000' (dry run) to see what would be deleted
  3. Run 'smart 10000 --execute' to actually delete

This will reduce quota usage while keeping the most valuable cached prompts.
`);
}

if (require.main === module) {
  main();
}

