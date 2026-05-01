'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
".git/config": "c66d2366df6104e5c341af136aae966f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "50839aac0866a2ebe1865349b8f83f02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4cc8b5bd6ff2b7c7ac28ada3d9fa9321",
".git/logs/refs/heads/main": "fbed78a20dc223b8d207268300807d1f",
".git/logs/refs/remotes/origin/main": "4c5fc939232fbf3aed7f01aa5bb598ef",
".git/objects/03/214f6951bc9c8649dc283ce58bd5130a6deade": "390229297022dfe65791fb8ab1db253b",
".git/objects/04/2203bb688f75950c338e34ebdde64f15622101": "90f467f5ccce4d946981b3ae4e3389e3",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/eb77241621d81ce02a4c32f2e1e748809ba7aa": "cc58e070aa2ae9046b0d60fa5bbf624a",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/13/9bebd8223dd2e70b84d34b2a5b8bda835b033e": "8cc797b8c3745216a250164c6154915c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/caa02fda42405702b6e006dc54793ee4b4f8c8": "907b1cd0c9687f04125560b8959c865a",
".git/objects/26/0e1ea4dffe27686b5b98266834a69fa589205d": "4b7436ddf97a184d22bab3ca94fbc61c",
".git/objects/2a/49745d11ca531333e6a777598e24db4a00372b": "608dacfcee3554f4999c64bd30455876",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/208f4a35ff1eec939f4b774a68c3fb6d1ac5e5": "ac719528627bb6c7cf0a07ba8091d867",
".git/objects/31/fa44e6ee5de172cff7c22e555bdf398a2215d0": "f9481c8d0f15f975cf4f297808f81865",
".git/objects/33/cd7f01fcf140947501bad68ca401d718a20ef5": "76a117fbb8c15b55e9ca5111d1b09d71",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ed3f3096bc41edaf7c00309f07df8836ccb68b": "1d7f7bdf631ff72982fd68ff3caff918",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/4a/707539ecd810c407a5dfa962495be98d66f83a": "14a3f1a87555865e31cc35de45e8e2b5",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/d338fcc57c88571eed41cac3538624cc983220": "14cb18a0f747741064b352c480dd86fb",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/5fbf4fb524b97260d524b6ca2b54136928092b": "496966b628c79fb4f018d7de4eff2f2c",
".git/objects/5a/13f8e2e84c00590a8e52609905c43ec5388538": "342da936e5b463d5a991c4b7d95d2d97",
".git/objects/60/0f7fc98158872d126e5c031af879ebbd779299": "9499ed23181991d0724d1f9ae3583e1d",
".git/objects/60/2dc2a34f0d5751a4555e384dee086bebc7f25a": "def772787b13744f50e4efd787cd9733",
".git/objects/64/fec2e9c67936c16ea74b404bac74b3c15fd7f1": "66257327f7334c98851c16d98e931da8",
".git/objects/65/2db7bc83d7c199e694600c344943cb44753f4b": "615fc76ca9f10153dc4ee0a53adc5b38",
".git/objects/68/f21e1c8f800bd2fb8af3bcb5dcb23e61e85560": "c77e535ec6a2ecd6739d0350f4f97663",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/36b8d363cc3a7b957790823c3b3e078b5063ec": "7d8d12e5fe6a1fc441f81335b6ca2b78",
".git/objects/7d/d1d53a34c421886a26aba784b3a6b7053c7d1b": "5f1fd9b2d6ae2a71348bcb443b92b471",
".git/objects/80/1b36b17aecfb23db3f8d46e87a8a81065875b8": "7031080850b91eda214104480d7f9490",
".git/objects/81/c056fae6f9ffa8f7f7778ab47a48c2701c3059": "7b481ccc571368c38e04b274d066650c",
".git/objects/81/cdbc0d5673c41fad430f5ec331cf84fa26ebe0": "5735e47912b80f054f54a1b914b37ec5",
".git/objects/84/26fa781b4cab7c4ca87f73d73be829b663de2f": "7ad3a47a055102204dd594d15bed6931",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d89ce8abb2dd79af0ca055b22d24da104c8146": "1c9fa321399ddc47e6600704eec396f6",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/d570b02809ed6218794773cfcd9712d3fcdc6d": "70d3a685e2877e94df15eea24f6e84a3",
".git/objects/94/04ea8236c82ae1555568585cef8c354dc91769": "c3a781d17c83c04185fe9f1a0d5a18b5",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/32565334b4dfe41b4824180c4ac53a4da235de": "4456c6ef86a27235c2a6d7b08c20c258",
".git/objects/9e/ff869caab34b565363d895cf486d2b56a32966": "a86daf342df1b09a34dfe7e433cfb2e9",
".git/objects/9f/d5cda70b352c51e256b23bdd16463e1b8c66cd": "566bffbce2b79705674fd4cfbd840b95",
".git/objects/a2/d75f7ba0a0d8fc0629b6c5715d32376a2a0956": "8ef2abb1b9430a590cdaab829aded624",
".git/objects/aa/0a8c51f1e89fef53be24490baecedc819dea3e": "4707e93f6b3521b944e5bac3220a6339",
".git/objects/b7/33ced5d193ce2bb953a05628e38f40d2fb5471": "a6939e25a90425cdbcba66461cfb91c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/cb18c5374b7e5ca86952f65e91ecec658d8416": "bb02d5e77c5f4805cfde4a1082c4520e",
".git/objects/c3/051afe469453e529162f5dabd1f86f11bc2b9c": "1dc6c547c828a5ee82fac05decbaf61f",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/d33a77f33851cef4241761c6ed5b419d81e3ed": "09e3c0598ca3c81d95fbfe3f09a3b08c",
".git/objects/cf/f3b55e3b6ad37dbe905cf1530d181d5b8f1b07": "d2d9c031fa41c6c09a26f3445fcd14d0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a706303237d9e5b27b7a420db37431e5c94c54": "7e396180e5e79ae1116b25467de22148",
".git/objects/da/246f1e1c3a28fc0b1b1a3b9f1ad4ca6e34eb6c": "3b0292e7335c1c38eca42c8b503650b2",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/25c357167a83d34f20fcd0a8849fc7b3b3d29e": "cc3ad1dfabad99f12c118222a643edfc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/49a3832fd06750e5e7b0e72c5ce00a6b57f4e3": "6ca2a186e77e67c0f1d1e855c5f4db9d",
".git/objects/f5/5011fe326c005377f1a46eece802d4a8cbdaba": "238dafcef378d0638819c5e8194eb258",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/4cadde8f5f80c9df781bd68344380a03a350ef": "d6a2ebb780f068a736de8fe8a406a969",
".git/objects/f9/157844a0b4038f00cece11364a249439e4d804": "b02f2a0d476596d1a974f9ac623d97f5",
".git/objects/fb/a078b62d698d57e2c2ce0a51111d9bda3e9e5d": "4788cbe4d724c0af18dec1145d3b0ea9",
".git/objects/fc/b4d0b8fa10a86a0f9447b89550f4feb4a11ba4": "6ead80141e42328a8d3543e842907d2c",
".git/refs/heads/main": "400713f81d6e1398d04d138103f1500b",
".git/refs/remotes/origin/main": "400713f81d6e1398d04d138103f1500b",
"assets/AssetManifest.bin": "948b592b4c0f1f1b09fed437ec6eaf07",
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
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c64ef7cb819908b2d995218f7e331b34",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba3380fd791bd819ae58a09b5ed2ffc6",
"/": "ba3380fd791bd819ae58a09b5ed2ffc6",
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
