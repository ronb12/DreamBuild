const CACHE_NAME = 'dreambuild-v2.13.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('DreamBuild Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('DreamBuild Service Worker caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
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

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          console.log('DreamBuild Service Worker serving from cache:', event.request.url);
          return response;
        }
        
        console.log('DreamBuild Service Worker fetching fresh asset from network:', event.request.url);
        return fetch(event.request);
      }
    )
  );
});