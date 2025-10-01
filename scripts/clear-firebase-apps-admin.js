// Script to clear all apps from Firebase Firestore using Admin SDK
const admin = require('firebase-admin');

// Initialize Firebase Admin (using default credentials from Firebase CLI)
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'dreambuild-2024-app'
  });
}

const db = admin.firestore();

async function clearAllApps() {
  try {
    console.log('🔥 Starting to clear all apps from Firebase...');
    
    // Get all apps from the 'apps' collection
    const appsSnapshot = await db.collection('apps').get();
    
    console.log(`📊 Found ${appsSnapshot.size} apps to delete`);
    
    if (appsSnapshot.size === 0) {
      console.log('✅ No apps found in database');
      return;
    }
    
    // Delete apps in batches
    const batch = db.batch();
    let deletedCount = 0;
    
    appsSnapshot.forEach((docSnapshot) => {
      batch.delete(docSnapshot.ref);
      deletedCount++;
      
      // Commit batch every 500 operations (Firestore limit)
      if (deletedCount % 500 === 0) {
        console.log(`🗑️ Committing batch of 500 apps...`);
        batch.commit();
      }
    });
    
    // Commit remaining operations
    if (deletedCount % 500 !== 0) {
      console.log(`🗑️ Committing final batch of ${deletedCount % 500} apps...`);
      await batch.commit();
    }
    
    console.log(`✅ Successfully deleted ${deletedCount} apps from Firebase!`);
    
  } catch (error) {
    console.error('❌ Error clearing apps:', error);
  }
}

// Run the function
clearAllApps().then(() => {
  console.log('🎉 Firebase apps clearing completed!');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Failed to clear apps:', error);
  process.exit(1);
});

