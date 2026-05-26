const CACHE_NAME = 'dreambuild-network-only-v20260515-gallery-fix'
const REFRESH_PARAM = 'db-sw'
const REFRESH_VERSION = 'v20260515-gallery-fix'

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then((clients) => Promise.all(clients.map((client) => {
        try {
          const url = new URL(client.url)
          if (url.origin !== self.location.origin || url.searchParams.get(REFRESH_PARAM) === REFRESH_VERSION) {
            return Promise.resolve()
          }

          url.searchParams.set(REFRESH_PARAM, REFRESH_VERSION)
          return client.navigate(url.href)
        } catch (error) {
          return Promise.resolve()
        }
      })))
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, { cache: 'reload' }))
    return
  }

  event.respondWith(fetch(event.request))
})
