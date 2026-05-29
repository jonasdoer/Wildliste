const CACHE_NAME = 'wildliste-robust-dropdown-1';
const ASSETS = ['./index.html?v=robust-dropdown-1','./manifest.json'];
self.addEventListener('install', event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(()=>{}))); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html?v=robust-dropdown-1')))); });
