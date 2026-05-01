'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "948b592b4c0f1f1b09fed437ec6eaf07",
"assets/AssetManifest.bin.json": "1df82d2b48ece8e3c25b5742014dc036",
"assets/AssetManifest.json": "a1e6e8a7c491ea466b0d391a9e1ae82b",
"assets/assets/activity.png": "b296fd8ed649f4d22aaa8f3e4e82e182",
"assets/assets/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/hattah.png": "a75824f149439da4f0ec43ea5263f860",
"assets/assets/images/logo.png": "0def06c4dec055e09fd5c1eb3b6727f0",
"assets/assets/images/logo_medium.png": "d245cc6155f347a4c70c9e13e83fb3ae",
"assets/assets/images/masjid.png": "cdd2c0cf8697d227ca3679cdc71a450a",
"assets/assets/program.png": "86df3dbf66c019574024fb36ede9199f",
"assets/assets/project.png": "491742a7ff26bd38c90bc066fef489e9",
"assets/assets/quran.png": "6bd16ee51098894a97186e2afdad0b2c",
"assets/assets/short_video.png": "1c86dcb5d21b0ba30818ed74e3053b08",
"assets/assets/sounds/alfatihah.mp3": "dcb9669b455b148f9a7cda9d933ce5cb",
"assets/assets/sounds/marimba.mp3": "d454c0d081c8749b6b0278ec58ae3ee3",
"assets/assets/sounds/mozart.mp3": "3d57bff0b5b2903d689475da6a68c012",
"assets/assets/sounds/nokia.mp3": "cc11a27862466086ef9fadf0ce7d5aec",
"assets/assets/sounds/one_piece.mp3": "fab51b835696366a0d8af2fb5cb7bced",
"assets/assets/sounds/star_wars.mp3": "453c18ed8c5783939b17dbdb54347f64",
"assets/assets/todo.png": "79a2d071eb1e2f4c78ac4d84bb94bf06",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b61e07446555eb37b9553fa39f6d2f5d",
"assets/NOTICES": "7bca75bffcf578cf39329e2203a82a3f",
"assets/packages/alarm/assets/long_blank.mp3": "d632dd58e2137a2e67849c108d5eb4b6",
"assets/packages/alarm/assets/not_blank.mp3": "71ac239a121767241ccfcc1b625d44e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c58f5459dc97752672c5e1c2ac585b23",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d3b44ab2211dc547886fa2af483e7a07",
"/": "d3b44ab2211dc547886fa2af483e7a07",
"main.dart.js": "527501c44688401ff8bbb4b451afa37b",
"manifest.json": "17881738838998749129168bb0cb30cf",
"splash/img/dark-1x.png": "c6f95a55352affaab7730932cfc693dc",
"splash/img/dark-2x.png": "b8946f5b0341acf8390ade7ab133dfdc",
"splash/img/dark-3x.png": "6952260b5f0d4caf78d734486f70eb3c",
"splash/img/dark-4x.png": "0a1f0fea3765a3c033b146a1b9349174",
"splash/img/light-1x.png": "c6f95a55352affaab7730932cfc693dc",
"splash/img/light-2x.png": "b8946f5b0341acf8390ade7ab133dfdc",
"splash/img/light-3x.png": "6952260b5f0d4caf78d734486f70eb3c",
"splash/img/light-4x.png": "0a1f0fea3765a3c033b146a1b9349174",
"version.json": "8307441b278bd3d2b580a5c52fcfea95"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
