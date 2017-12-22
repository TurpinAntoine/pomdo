// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var dataCacheName = 'final';
var cacheName = 'final-final';
var filesToCache = [
    '/',
    'index.html',
    'styles/inline.css',
    'styles/main.css',
    'styles/materialize.min.css',
    'images/bg/bg-bulle.pnh',
    'images/bg/bg-cadrillage.png',
    'images/bg/bg_musique-du-jour.svg',
    'images/bg/tab_bar.svg',
    'images/genres/black/disco.svg',
    'images/genres/black/electro.svg',
    'images/genres/black/k-pop.svg',
    'images/genres/black/pop.svg',
    'images/genres/black/rap.svg',
    'images/genres/black/reggae.svg',
    'images/genres/black/rock.svg',
    'images/genres/black/tendance.svg',
    'images/genres/black/variete-francaise.svg',
    'images/genres/white/disco.svg',
    'images/genres/white/electro.svg',
    'images/genres/white/k-pop.svg',
    'images/genres/white/pop.svg',
    'images/genres/white/rap.svg',
    'images/genres/white/reggae.svg',
    'images/genres/white/rock.svg',
    'images/genres/white/tendance.svg',
    'images/genres/white/variete-francaise.svg',
    'images/groupes/aerosmith-groupe-carrière-tournee-separation.jpg',
    'images/groupes/arton177667.jpg',
    'images/groupes/DSC5980.jpg',
    'images/groupes/L-abecedaire-de-Benjamin-Biolay.jpg',
    'images/groupes/queen.jpg',
    'images/groupes/tame-impala-2015-newweb.jpg',
    'images/groupes/vianney-en-concert-paris-juin-2018.jpg',
    'images/icons/bravo.svg',
    'images/icons/coche.svg',
    'images/icons/fingers.svg',
    'images/icons/Group.png',
    'images/icons/group1.svg',
    'images/icons/group2.svg',
    'images/icons/Group 2.png',
    'images/icons/micro.svg',
    'images/icons/pas_coche.svg',
    'images/illu/1_connected.png',
    'images/illu/1_connected.svg',
    'images/illu/2_genres.png',
    'images/illu/2_genres.svg',
    'images/illu/3_sing.png',
    'images/illu/3_sing.png',
    'images/illu/4_mix.png',
    'images/illu/4_mix.svg',
    'images/logo/App Icon 60 x 60.png',
    'images/logo/logo_V2.svg',
    'images/membre/Group 2 (1).png',
    'images/membre/image-1.png',
    'images/membre/image-2.png',
    'images/membre/image-3.png',
    'images/membre/image-4.png',
    'images/membre/image-5.png',
    'images/membre/IMG_1802.JPG',
    'images/membre/lucile.jpg',
    'images/membre/turpin.jpg',
    'images/tabbar/lesbuldo.svg',
    'images/tabbar/lesbuldo_active.svg',
    'images/tabbar/parametres.svg',
    'images/tabbar/parametres_active.svg',
    'images/tabbar/parametres_blanc.svg',
    'images/tabbar/profil-svg.svg',
    'images/tabbar/profil_active.svg',
    'partials/footer.php',
    'partials/header.php',
    'partials/loader.php',
    'partials/loader.php',
    'scripts/index.js',
    'scripts/main.js',
    'scripts/materialize.min.js',
    'views/addFfriends.php',
    'views/afterShower.php',
    'views/beforeShower.php',
    'views/countdown.php',
    'views/createGroup.php',
    'views/groupPage.php',
    'views/home.php',
    'views/musicTypes.php',
    'views/onboarding.php',
    'views/showering.php',
    'views/training.php',
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    /*
     * Fixes a corner case in which the app wasn't returning the latest data.
     * You can reproduce the corner case by commenting out the line below and
     * then doing the following steps: 1) load app for first time so that the
     * initial New York City data is shown 2) press the refresh button on the
     * app 3) go offline 4) reload the app. You expect to see the newer NYC
     * data, but you actually see the initial data. This happens because the
     * service worker is not yet activated. The code below essentially lets
     * you activate the service worker faster.
     */
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
    if (e.request.url.indexOf(dataUrl) > -1) {
        /*
         * When the request URL contains dataUrl, the app is asking for fresh
         * weather data. In this case, the service worker always goes to the
         * network and then caches the response. This is called the "Cache then
         * network" strategy:
         * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
         */
        e.respondWith(
            caches.open(dataCacheName).then(function(cache) {
                return fetch(e.request).then(function(response){
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
        );
    } else {
        /*
         * The app is asking for app shell files. In this scenario the app uses the
         * "Cache, falling back to the network" offline strategy:
         * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
         */
        e.respondWith(
            caches.match(e.request).then(function(response) {
                return response || fetch(e.request);
            })
        );
    }
});
