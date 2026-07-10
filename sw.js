// Service worker minimal pour permettre l'installation du Passage
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Passage direct au réseau : Le Passage a besoin d'être en ligne pour fonctionner
  event.respondWith(fetch(event.request));
});
