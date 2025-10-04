#!/usr/bin/env node

/**
 * Delete All Gallery Apps from Firebase
 * Product of Bradley Virtual Solutions, LLC
 * 
 * This script deletes all sample apps from the Firebase gallery
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

console.log('✅ Found Firebase Admin SDK key:', serviceAccountPath);

// Initialize Firebase Admin
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dreambuild-2024-app.firebaseio.com'
});

const db = admin.firestore();

async function deleteAllGalleryApps() {
  console.log('\n╔══════════════════════════════════════════════════════════════════════════════╗');
  console.log('║           🗑️  DELETE ALL GALLERY APPS FROM FIREBASE                          ║');
  console.log('║                   Product of Bradley Virtual Solutions, LLC                  ║');
  console.log('╚══════════════════════════════════════════════════════════════════════════════╝\n');

  try {
    // Collections that might contain gallery/sample apps
    const collections = [
      'generated_apps',
      'apps',
      'gallery',
      'templates',
      'sample_apps',
      'projects'
    ];

    console.log('🔍 Searching for gallery apps in Firebase...\n');

    let totalDeleted = 0;

    for (const collectionName of collections) {
      try {
        console.log(`📂 Checking collection: ${collectionName}`);
        const snapshot = await db.collection(collectionName).get();
        
        if (snapshot.empty) {
          console.log(`   ✅ Collection "${collectionName}" is empty\n`);
          continue;
        }

        console.log(`   📊 Found ${snapshot.size} documents in "${collectionName}"`);
        
        // Delete all documents in batches
        const batchSize = 500;
        let deleted = 0;
        
        while (true) {
          const batch = db.batch();
          const docs = await db.collection(collectionName).limit(batchSize).get();
          
          if (docs.empty) break;
          
          docs.forEach(doc => {
            batch.delete(doc.ref);
            deleted++;
            totalDeleted++;
          });
          
          await batch.commit();
          console.log(`   🗑️  Deleted ${deleted} documents from "${collectionName}"`);
          
          if (docs.size < batchSize) break;
        }
        
        console.log(`   ✅ Finished deleting from "${collectionName}"\n`);
        
      } catch (error) {
        console.log(`   ⚠️  Collection "${collectionName}" doesn't exist or error: ${error.message}\n`);
      }
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ DELETION COMPLETE!`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    console.log(`📊 Total documents deleted: ${totalDeleted}`);
    console.log(`✅ Gallery is now empty!`);
    console.log(`🔗 Check: https://dreambuild-2024-app.web.app/#/gallery\n`);

  } catch (error) {
    console.error('❌ Error deleting gallery apps:', error);
    process.exit(1);
  }
}

// Run the deletion
deleteAllGalleryApps()
  .then(() => {
    console.log('\n✅ Script completed successfully!\n');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });

