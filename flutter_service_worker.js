'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "307e10f1c2ca2e8b8ef41d8489b14809",
"index.html": "288c45187321b6b6d95afbab10c81e18",
"/": "288c45187321b6b6d95afbab10c81e18",
"main.dart.js": "f7a1949499017f0f3673393a3042820b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "902f7f1e400b7d819c57352ed48dd3a7",
"logo.png": "902f7f1e400b7d819c57352ed48dd3a7",
"icons/android-chrome-192x192.png": "902f7f1e400b7d819c57352ed48dd3a7",
"icons/apple-touch-icon.png": "0383443e14e4bc27be53eaf80209dfa3",
"icons/android-chrome-512x512.png": "e74a239432ef07c0a583608b2cd867db",
"manifest.json": "d4f3f254d4fc39ebf7a14ce809da1d95",
".git/config": "d0a6439068cd2af97912d9eed5f5870a",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/59/1015a3c533872b24065322036d02babc3917fd": "d49570b26d73940ab9f2d80fce992a86",
".git/objects/6f/62590d926a8de48d6c67f8a92f4dd0e5bfa80c": "730bf1f3a5f52a392d968a4a40c28505",
".git/objects/9b/cbbeffe25d8effde4059934368fc64caea7a6a": "196c53c95ded7b2960b8a7baccd6a1ae",
".git/objects/9e/a73494532e3a2ec738da3971184b66661b31f1": "24741193da71307f2f969bb8e9491049",
".git/objects/04/8cff48a2f8233d9c435a71aa7d797d8edd2660": "f1b9dcb0e95400242d83319bdd7d7f09",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/365b84616891dde4254362b08fd05964737caf": "2b9e534414cd04c831e8ddfecd5d7dbf",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/93/fabe594f14c47009aa10ed93b78d4a7a9e3f9a": "12eb6bb14ab9d06dd1454bc150360616",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/082391917b2d68a479e6a7646c68585add563b": "9096b2cb71ae1257d7d4f5a8192e9c02",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ac/fa08a2c22973b9f3f0baae26ee029237fb78c0": "0de446fd2658452b62a16f40bdeb2bae",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/1ba4fa25848e71e52436c668c2fa7b650863bd": "7b5272659bbdb3adbb3a4465eb597c19",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/b4/c0965d4dbd6eff91867ff067dc34a6375ca380": "654f9962be203be41c63166667eaefce",
".git/objects/a5/b20fe4ae6b72db4896a3299cbf1b662bb6efff": "daf46990c3268535c1b96df0b1f8d2a3",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/ae/1eb537f9ba16b739975e0bb736d9271947d99d": "3cf2c16317410bbeea4f92289736b991",
".git/objects/ab/1c988da3cadb05ebaffa3800b2dc67216ed839": "98493c244ae2e62c7f710ebf204c31ff",
".git/objects/ab/157e476ab6a182747411ee6bab63826739ad57": "6e7cbd31daed834b31884b0b09188b4b",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/c0/ee71c5a313392cd02e9d42e31aa059b98e6d3c": "9120ee2a7521f12d412591d02c24b812",
".git/objects/c9/8e6bb3efd397c037bfa5d85f7fc8df01cce0d9": "5075811091bd140608492d14859cb830",
".git/objects/c9/80c7403e7958987cdf91227dccc245fb15cb9c": "0a674a0aaf35330a058ca8a9793b634c",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e4/173551c3233f8ffe38787b23616accf870a3cc": "2fd6519a874d72c33a23b9a67ec14fd8",
".git/objects/ed/9fe63f19218873f85cc37d2349d42988d368a0": "ce1103af6895969bf2c8e607e9f290c6",
".git/objects/ed/2d707bb450c759167578321696fdfdd5fb48e0": "1907b5e8c999ec50e9bb00bb21beecd4",
".git/objects/c1/8838ebe96c5ef0b06939e4434b3b64622738f4": "251201c3f3878e046d332f4e7c50f218",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/ec/169b4d4d3faa951ad3fc9a4bcadc0cb02a213f": "c1bd64a1c10a4fc97ec2851691d58d38",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/pack/pack-5c9616e9969b792b01f434711fb6599aa8b3f80d.idx": "ce3936861ae294a7536d2fc0d1a00938",
".git/objects/pack/pack-5c9616e9969b792b01f434711fb6599aa8b3f80d.pack": "11dd73916cf81e6de8d810a08d99bde5",
".git/objects/11/41df1998cbe4b29e95d976bfa30b61f9c6b87e": "7100c55d5b1158b3dd7dccba8ed6cb21",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/17/9fb75ad989b565ded86a1bbefaf2a2cecfa168": "b0193a1da8831cae89d1b5031180e172",
".git/objects/26/2013d2786ca0b402dc7d24a6d05d5c47b06389": "b106dd5c3d32fda03f49e162c00c8649",
".git/objects/21/df84a69b82dd53df5d410fde997ce5fe499425": "179e21ac4339c0c0b2ba733c676d2745",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/81/4192fdecd202f74b8909d41c07d431c626d3ff": "aa471134fc39a97849e11073bce79b06",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/9f/3296e37ef8c3a30288a5471133fbec19fe751e": "e9d1eef66682f6e46adf814e05600358",
".git/objects/09/8f19c1b595599d6cbacb170bdabdadefb94904": "538916c47ef7abc6214ac2713ce58d73",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/62/36474c2081ba11c3551545d0d23dd24510883a": "a2f2414e1f0b0221c181c598623b3b90",
".git/objects/62/0afe7336d227e85fb4acb38e1178174980b5d0": "feb55d1a472066deba3928c5748eecac",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/64434e625f20ac27f13d8c2a35d0f23c08346c": "f5538149d35ea9737636bc6caafc9380",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/b1/41ae0de5c46a4a5506acec73498e4fcbab8e55": "cd1362f9f139a2ba75eceeace6ae83a7",
".git/objects/dc/aa011dc804b3043308b54a35bf5c7aa6699bfa": "11f341bc96099ef8905fddd3036127f5",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/e4f411ffcdadbeb2c9bb53350b4b955ab1e265": "d79562b7ed9e9feb9b9c5f7065dd8e66",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a6/bc208cfab26e746f2d3ee2e2be36a734055564": "38d22d2accc379e5d7eb35ac1beaaceb",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/cd/b7dbfadbefa505bf0bb99660013c8323f7a276": "b344c8805b640e4b9e2db08de590b769",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/c5/feea34f1328765490981e73eee96f2cb24c9db": "0bf77d7e3286da6f8d4b5b3de3b9b7b5",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e7/dbad51b67d6f11a994d07db9dbb0292129b588": "495d4ba717a40877a1399e54c0b1e0b7",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1e/d27024f315bfd2dc984dd13852924e60b6df1f": "a1a5fa441ac22f90d8649d1c7a47cb92",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/8d/b32c15409264def1439925ec1cd09e36297a54": "5047bbf5883424ec5e918fbef2929ab8",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/15/eca92c42901690703f4548d8d53e0bd473fe68": "baa56c1e5e7d515f36073291599b2240",
".git/objects/12/7a96ec2ee2ab6467963e3c3ab45c132460eb2a": "79f919832d4a565d30b07a10825e4e31",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2b/11a599ac714bc356d3ca0f453afa3d5d5af20c": "bec4394ef47cf55e95e8729db442278d",
".git/objects/8b/ff6bc7d98192e2305d58aff2720525b7eeba30": "c8a0ef943d9923e026f13b486c5a3a24",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20a3f7b4da620a6924a1d6eb12479146",
".git/logs/refs/heads/main": "20a3f7b4da620a6924a1d6eb12479146",
".git/logs/refs/remotes/origin/main": "7777bb28ac0b7402579c65a31b1c06b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7ed70dedf726ab4fa95cd77e5c1f1e5f",
".git/refs/remotes/origin/main": "442f3a0d34da02d36c87699e8e078fb3",
".git/index": "af516842ace3a37d3408002499ed49fd",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/FETCH_HEAD": "f191750e54f5869b417c6900f617df9e",
"assets/AssetManifest.json": "88cfa316f5f197fdb897be44e529ae74",
"assets/NOTICES": "3126bd640a7c85bd4283642b2787367c",
"assets/data.json": "77654370d8f4c3e106062e40b0582b6c",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "382d7f5363d04b798dcb23e2ad09faf2",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "be0f03b25b4d69b702284ab56cf05b8f",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/projects/talabat_logo.png": "1ea6ff33e610146d818e586e9c7697fe",
"assets/assets/projects/the_base_logo.png": "51d9ff46a7fc159a3830db4bedfaf03d",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/food_panda_app.png": "4f9f4b43ac45de605180c15b5b171e33",
"assets/assets/projects/mjam_app.png": "ba9c6c4c0e51df807c70aad4c0951b4c",
"assets/assets/projects/the_base.png": "73886def69dcf0d6764fccdef720c8ee",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/talabat_app.png": "8b0a19d25ba0b853b316615f023d81d5",
"assets/assets/projects/mjam_app_logo.png": "d58120f831b3b5d80da8f546089fc8e7",
"assets/assets/projects/pandamerchand_app.png": "6f8a6b16dda5aca047863cfbc621b325",
"assets/assets/projects/pandamerchand_logo.png": "af6f8ec1b4e406559a1c64f8bfb09cc9",
"assets/assets/projects/snackbar.png": "426d7d3320b4207468e1dec6322b3b08",
"assets/assets/projects/food_panda_app_logo.png": "6515d453b9b4e40f19a64d7214570186",
"assets/assets/giphy.gif": "0f4a16d66200d7a7e2dce68bebfea4ff",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/university.png": "23f1e7bbbfd836aaee90e56f8e7080a6",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/alba_color.png": "68f4f764775390cf0919542085ab9367",
"assets/assets/photos/alba_mobile.png": "ca6e8c7d07c2375e53abd4b2e2640255",
"assets/assets/photos/alba_black_white.png": "69bf85ed2cb388b9046975169d5751f7",
"assets/assets/photos/alba_white_black_mobile.png": "b69e92355eed8a8f9e22723dcddbe48a",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0a5c4910b7dcaabd37ff75ffcde89eb3",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "be5ad3f942b9c6b53700dc546c0fe280",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "9ec206612fc1cc8d17bdba578219d94a",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
