// DreamBuild Service Worker for PWA functionality
const CACHE_NAME = 'dreambuild-v2.12.0';
const urlsToCache = [
  '/',
  '/ai-builder',
  '/dashboard',
  '/projects',
  '/settings',
  '/login',
  '/manifest.json',
  '/content.json',
  '/icons/icon.svg'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('DreamBuild Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('DreamBuild Service Worker caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('DreamBuild Service Worker cache failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('DreamBuild Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('DreamBuild Service Worker deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Clear all caches to force fresh asset loading
      console.log('DreamBuild Service Worker clearing all caches for fresh start');
      return caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
      });
    })
  );
  self.clients.claim();
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip only source maps to avoid MIME type issues
  if (event.request.url.includes('.map')) {
    console.log('DreamBuild Service Worker skipping source map request:', event.request.url);
    return fetch(event.request);
  }

  event.respondWith(
    (async () => {
      // Skip localhost requests to avoid CORS issues
      if (event.request.url.includes('localhost') || event.request.url.includes('127.0.0.1')) {
        console.log('DreamBuild Service Worker skipping localhost request:', event.request.url);
        return fetch(event.request).catch(() => {
          // Return a basic response for failed localhost requests
          return new Response('Local service not available', { status: 503 });
        });
      }

      // For assets (JS, CSS), always try network first, then cache
      if (event.request.url.includes('/assets/') || 
          event.request.url.includes('.js') || 
          event.request.url.includes('.css')) {
        try {
          console.log('DreamBuild Service Worker fetching fresh asset from network:', event.request.url);
          const networkResponse = await fetch(event.request);
          if (networkResponse.ok) {
            // Cache the fresh response
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }
        } catch (error) {
          console.log('DreamBuild Service Worker network failed, trying cache:', event.request.url);
        }
        
        // Fallback to cache if network fails
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          console.log('DreamBuild Service Worker serving from cache:', event.request.url);
          return cachedResponse;
        }
        
        return new Response('Asset not available', { status: 404 });
      }

      // For other requests, use cache-first strategy
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        console.log('DreamBuild Service Worker serving from cache:', event.request.url);
        return cachedResponse;
      }
      
      console.log('DreamBuild Service Worker fetching from network:', event.request.url);
      return fetch(event.request).catch(() => {
        // If network fails, show offline page for navigation requests
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
        // Return a basic response for other failed requests
        return new Response('Network request failed', { status: 503 });
      });
    })()
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('DreamBuild Service Worker background sync');
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', event => {
  console.log('DreamBuild Service Worker received push message');
  
  const options = {
    body: event.data ? event.data.text() : 'New update from DreamBuild!',
    icon: '/icons/icon.svg',
    badge: '/icons/icon.svg',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open DreamBuild',
        icon: '/icons/icon.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon.svg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('DreamBuild AI', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('DreamBuild Service Worker notification clicked');
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for background sync
async function doBackgroundSync() {
  try {
    // Sync any pending data when back online
    console.log('DreamBuild Service Worker syncing data...');
    
    // Check if there's pending data to sync
    const pendingData = await getPendingData();
    
    if (pendingData.length > 0) {
      for (const data of pendingData) {
        await syncData(data);
      }
    }
    
    console.log('DreamBuild Service Worker sync completed');
  } catch (error) {
    console.error('DreamBuild Service Worker sync failed:', error);
  }
}

// Get pending data from IndexedDB
async function getPendingData() {
  // This would retrieve any data saved while offline
  return [];
}

// Sync data to server
async function syncData(data) {
  try {
    const response = await fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      console.log('DreamBuild Service Worker data synced successfully');
      // Remove from pending data
      await removePendingData(data.id);
    }
  } catch (error) {
    console.error('DreamBuild Service Worker sync failed:', error);
  }
}

// Remove synced data from pending
async function removePendingData(id) {
  // Remove from IndexedDB
  console.log('DreamBuild Service Worker removing pending data:', id);
}

// Message handling for communication with main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Periodic background sync (if supported)
if ('periodicSync' in self.registration) {
  self.addEventListener('periodicsync', event => {
    if (event.tag === 'content-sync') {
      console.log('DreamBuild Service Worker periodic sync');
      event.waitUntil(doBackgroundSync());
    }
  });
}

console.log('DreamBuild Service Worker loaded successfully');
