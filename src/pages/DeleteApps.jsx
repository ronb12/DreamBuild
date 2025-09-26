import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

const DeleteApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [deletedCount, setDeletedCount] = useState(0);

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    try {

      const appsRef = collection(db, 'apps');
      const snapshot = await getDocs(appsRef);
      const appsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setApps(appsList);
    } catch (error) {
      console.error('❌ Error loading apps:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAllApps = async () => {
    if (!confirm('Are you sure you want to delete ALL apps? This cannot be undone!')) {
      return;
    }

    setDeleting(true);
    setDeletedCount(0);

    try {

      for (const app of apps) {
        try {
          await deleteDoc(doc(db, 'apps', app.id));
          console.log(`✅ Deleted app: ${app.name || 'Unknown'} (${app.id})`);
          setDeletedCount(prev => prev + 1);
        } catch (error) {
          console.error(`❌ Failed to delete app ${app.id}:`, error);
        }
      }

      await loadApps(); // Reload to show empty state
    } catch (error) {
      console.error('❌ Error deleting apps:', error);
    } finally {
      setDeleting(false);
    }
  };

  const deleteSingleApp = async (appId, appName) => {
    if (!confirm(`Are you sure you want to delete "${appName || 'Unknown'}"?`)) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'apps', appId));
      console.log(`✅ Deleted app: ${appName} (${appId})`);
      await loadApps(); // Reload to update list
    } catch (error) {
      console.error(`❌ Failed to delete app ${appId}:`, error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading apps...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Delete Apps</h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Found {apps.length} apps in the gallery. You can delete individual apps or all apps at once.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={deleteAllApps}
                disabled={deleting || apps.length === 0}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {deleting ? `Deleting... (${deletedCount}/${apps.length})` : 'Delete All Apps'}
              </button>
              
              <button
                onClick={loadApps}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh List
              </button>
            </div>
          </div>

          {apps.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All apps deleted!</h3>
              <p className="text-gray-600">The gallery is now empty.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apps.map((app) => (
                <div key={app.id} className="bg-gray-50 rounded-lg p-4 border">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {app.name || 'Untitled Project'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    ID: {app.id}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Created: {app.createdAt ? new Date(app.createdAt.seconds * 1000).toLocaleDateString() : 'Unknown'}
                  </p>
                  <button
                    onClick={() => deleteSingleApp(app.id, app.name)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteApps;

