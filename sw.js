// スマホで模擬面接 サービスワーカー
// 更新したときは VERSION の数字を上げてください（学生の端末に新しい版が届きます）
const VERSION = 'v2';
const CACHE = 'mensetsu-' + VERSION;
const FILES = [
  './', './index.html', './manifest.json',
  './icon-192.png', './icon-512.png',
  './apple-touch-icon.png', './favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// ページ本体はネット優先（つながっていれば常に最新版）、つながらなければ保存版を表示
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
