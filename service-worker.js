// Service Worker - 오프라인 지원 및 캐싱
const CACHE_NAME = 'curetembio-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    '/js/camera.js',
    '/js/analysis.js',
    '/js/chatbot.js',
    '/images/logo-white.png',
    '/images/logo-black.png',
    '/manifest.json'
];

// 설치 이벤트
self.addEventListener('install', event => {
    console.log('[Service Worker] 설치 중...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] 캐시 저장');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.error('[Service Worker] 캐시 실패:', err);
            })
    );
    
    self.skipWaiting();
});

// 활성화 이벤트
self.addEventListener('activate', event => {
    console.log('[Service Worker] 활성화');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] 구 캐시 삭제:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    
    self.clients.claim();
});

// Fetch 이벤트
self.addEventListener('fetch', event => {
    // 카메라 스트림 같은 blob은 캐싱하지 않음
    if (event.request.url.startsWith('blob:')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 캐시에 있으면 캐시에서 반환
                if (response) {
                    return response;
                }
                
                // 없으면 네트워크에서 가져오기
                return fetch(event.request)
                    .then(response => {
                        // 유효한 응답인지 확인
                        if (!response || response.status !== 200 || response.type === 'error') {
                            return response;
                        }
                        
                        // 응답 복제
                        const responseToCache = response.clone();
                        
                        // 캐시에 저장
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // 오프라인 시 기본 페이지 반환
                        return caches.match('/index.html');
                    });
            })
    );
});

// 메시지 이벤트
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('[Service Worker] 로드 완료');
