// Script to clear all apps from Firebase Firestore
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, deleteDoc, doc, writeBatch } = require('firebase/firestore');

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWjBfZHPHDI4rXRStWPP48lRZVJquWH38",
  authDomain: "dreambuild-2024-app.firebaseapp.com",
  projectId: "dreambuild-2024-app",
  storageBucket: "dreambuild-2024-app.firebasestorage.app",
  messagingSenderId: "780467658601",
  appId: "1:780467658601:web:833a9373c15fa3be0be7f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clearAllApps() {
  try {
    console.log('🔥 Starting to clear all apps from Firebase...');
    
    // Get all apps from the 'apps' collection
    const appsCollection = collection(db, 'apps');
    const snapshot = await getDocs(appsCollection);
    
    console.log(`📊 Found ${snapshot.size} apps to delete`);
    
    if (snapshot.size === 0) {
      console.log('✅ No apps found in database');
      return;
    }
    
    // Delete apps in batches
    const batch = writeBatch(db);
    let deletedCount = 0;
    
    snapshot.forEach((docSnapshot) => {
      batch.delete(docSnapshot.ref);
      deletedCount++;
      
      // Commit batch every 500 operations (Firestore limit)
      if (deletedCount % 500 === 0) {
        console.log(`🗑️ Deleting batch of ${deletedCount} apps...`);
        batch.commit();
      }
    });
    
    // Commit remaining operations
    if (deletedCount % 500 !== 0) {
      console.log(`🗑️ Deleting final batch of ${deletedCount % 500} apps...`);
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
