self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.onfetch=e=>{if(e.request.method!='GET'||!e.request.url.startsWith('http'))return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open('wm1').then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))};
