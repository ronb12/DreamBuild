#!/usr/bin/env node

/**
 * Delete 20,000 Cached Prompts from Firebase
 * Product of Bradley Virtual Solutions, LLC
 * 
 * This script removes all cached prompts to free up Firebase quota
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Find Firebase Admin SDK key
const possibleKeyPaths = [
  path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', '   dreambuild-2024-app-firebase-adminsdk.json'),
  path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', 'dreambuild-2024-app-firebase-adminsdk.json'),
  path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads', 'dreambuild-2024-app-firebase-adminsdk-h5sij-fbbe4e033b.json'),
  path.join(__dirname, '..', 'dreambuild-2024-app-firebase-adminsdk-h5sij-fbbe4e033b.json'),
  path.join(__dirname, 'dreambuild-2024-app-firebase-adminsdk-h5sij-fbbe4e033b.json'),
];

let serviceAccountPath = null;
for (const keyPath of possibleKeyPaths) {
  if (fs.existsSync(keyPath)) {
    serviceAccountPath = keyPath;
    break;
  }
}

if (!serviceAccountPath) {
  console.error('❌ Firebase Admin SDK key not found!');
  console.log('📁 Please place the key file in one of these locations:');
  possibleKeyPaths.forEach(p => console.log(`   - ${p}`));
  process.exit(1);
}

console.log('✅ Found Firebase Admin SDK key');

// Initialize Firebase Admin
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dreambuild-2024-app.firebaseio.com'
});

const db = admin.firestore();

async function deleteAllCachedPrompts() {
  console.log('\n╔══════════════════════════════════════════════════════════════════════════════╗');
  console.log('║        🗑️  DELETE 20,000 CACHED PROMPTS FROM FIREBASE                        ║');
  console.log('║                   Product of Bradley Virtual Solutions, LLC                  ║');
  console.log('╚══════════════════════════════════════════════════════════════════════════════╝\n');

  try {
    const collectionName = 'cached_prompts';
    
    console.log('🔍 Checking cached_prompts collection...\n');
    
    // Get count first
    const snapshot = await db.collection(collectionName).count().get();
    const totalCount = snapshot.data().count;
    
    console.log(`📊 Found ${totalCount.toLocaleString()} cached prompts\n`);
    
    if (totalCount === 0) {
      console.log('✅ Collection is already empty!\n');
      return;
    }
    
    console.log('🗑️  Starting deletion...\n');
    
    let deletedCount = 0;
    const batchSize = 500;
    
    while (true) {
      // Get a batch of documents
      const batch = db.batch();
      const docs = await db.collection(collectionName).limit(batchSize).get();
      
      if (docs.empty) {
        break;
      }
      
      // Delete each document in the batch
      docs.forEach(doc => {
        batch.delete(doc.ref);
        deletedCount++;
      });
      
      await batch.commit();
      
      const percentage = ((deletedCount / totalCount) * 100).toFixed(1);
      console.log(`   Progress: ${deletedCount.toLocaleString()} / ${totalCount.toLocaleString()} (${percentage}%)`);
      
      if (docs.size < batchSize) {
        break;
      }
    }
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ DELETION COMPLETE!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log(`📊 Deleted: ${deletedCount.toLocaleString()} prompts`);
    console.log(`✅ Firebase quota freed up!`);
    console.log(`💾 This will reduce read operations significantly\n`);

  } catch (error) {
    if (error.code === 8 || error.message?.includes('Quota exceeded')) {
      console.error('\n❌ ERROR: Firebase quota is still exhausted!');
      console.log('\n⏰ Please wait for quota reset (midnight PST) and try again\n');
    } else {
      console.error('\n❌ Error:', error);
    }
    process.exit(1);
  }
}

// Run the deletion
deleteAllCachedPrompts()
  .then(() => {
    console.log('✅ Script completed successfully!\n');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });


