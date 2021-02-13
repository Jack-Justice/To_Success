/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/11818/MyBlog/public/2021/02/02/Photo/index.html","c110e41fd94d086b748f04b848f6403f"],["C:/Users/11818/MyBlog/public/2021/02/02/hello-world/1.jpg","0be2fb65c1c33a4313719f25340a322f"],["C:/Users/11818/MyBlog/public/2021/02/02/hello-world/index.html","291923e27a9008ab154c83a425484184"],["C:/Users/11818/MyBlog/public/2021/02/02/来自柯基的祝福/1.jpg","0be2fb65c1c33a4313719f25340a322f"],["C:/Users/11818/MyBlog/public/2021/02/02/来自柯基的祝福/index.html","3a59d524453d31a41807860e6fdcadac"],["C:/Users/11818/MyBlog/public/archives/2021/02/index.html","7412833f7916b11ea0f6dee54c4b1b06"],["C:/Users/11818/MyBlog/public/archives/2021/index.html","3ece7209a0dcbdeae67e30e40fd0949e"],["C:/Users/11818/MyBlog/public/archives/index.html","14b2ca98869928150d5e1a9e3f27f054"],["C:/Users/11818/MyBlog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/11818/MyBlog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/11818/MyBlog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/11818/MyBlog/public/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/Users/11818/MyBlog/public/css/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["C:/Users/11818/MyBlog/public/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/Users/11818/MyBlog/public/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["C:/Users/11818/MyBlog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["C:/Users/11818/MyBlog/public/css/index.css","1f9e3a4220c20754dde95a70b74c6d31"],["C:/Users/11818/MyBlog/public/css/style.css","a42472cda2fcc57ce90627421357ded0"],["C:/Users/11818/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/11818/MyBlog/public/fancybox/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["C:/Users/11818/MyBlog/public/fancybox/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["C:/Users/11818/MyBlog/public/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["C:/Users/11818/MyBlog/public/fonts/fonteditor.3da1ef.woff","3da1efd6e743dc1b95b46df788f57bc2"],["C:/Users/11818/MyBlog/public/fonts/fonteditor.3e0d4a.svg","3e0d4a9ba17745bbe35e2c7b931cc9d4"],["C:/Users/11818/MyBlog/public/fonts/fonteditor.86c132.eot","86c132b126a70a8dc6942b86c31b5cce"],["C:/Users/11818/MyBlog/public/fonts/fonteditor.fe4d8a.ttf","fe4d8a7af6c9ab87097a592f5871c409"],["C:/Users/11818/MyBlog/public/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["C:/Users/11818/MyBlog/public/gitment/APlayer.min.js","a0b57f0a094201b1e838a26faa29fa78"],["C:/Users/11818/MyBlog/public/imag_butterfly/avatar.png","5f42ff270e76b2992785739165c38db7"],["C:/Users/11818/MyBlog/public/imag_butterfly/favicon.png","82068798d13dc7e43457f61ff2261b76"],["C:/Users/11818/MyBlog/public/images/hello-world/3-1612266332398.jpg","e182e17cd6ee8ff9f5e7d0c9ec3ae4af"],["C:/Users/11818/MyBlog/public/images/hello-world/3.jpg","e182e17cd6ee8ff9f5e7d0c9ec3ae4af"],["C:/Users/11818/MyBlog/public/images/来自柯基的祝福/1.jpg","0be2fb65c1c33a4313719f25340a322f"],["C:/Users/11818/MyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/11818/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["C:/Users/11818/MyBlog/public/img/alipay.jpg","dd731c15cb9a76779e3feb3a09731fe2"],["C:/Users/11818/MyBlog/public/img/biubiubiu.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["C:/Users/11818/MyBlog/public/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["C:/Users/11818/MyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/11818/MyBlog/public/img/forkme.png","8543596f3ec93d014f813015499c524e"],["C:/Users/11818/MyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/11818/MyBlog/public/img/gitee.svg","8c3546b7384d3ef0bd7eebbf7310692c"],["C:/Users/11818/MyBlog/public/img/head.jpg","be35764bffdb0e85ea6ab6c318c4cbfa"],["C:/Users/11818/MyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/11818/MyBlog/public/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["C:/Users/11818/MyBlog/public/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["C:/Users/11818/MyBlog/public/img/weixin.png","cfc6f7e0b5b0fbe2841a5603b90cbdac"],["C:/Users/11818/MyBlog/public/index.html","15bd238cccc48551defb34576664ca4b"],["C:/Users/11818/MyBlog/public/js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["C:/Users/11818/MyBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["C:/Users/11818/MyBlog/public/js/script.js","899039a2fd4a5c7a164d7ae5bfc78073"],["C:/Users/11818/MyBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["C:/Users/11818/MyBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["C:/Users/11818/MyBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["C:/Users/11818/MyBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["C:/Users/11818/MyBlog/public/lib/busuanzi.pure.js","d80e4eae60818eec40a0378b3123a1a1"],["C:/Users/11818/MyBlog/public/lib/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["C:/Users/11818/MyBlog/public/lib/default.css","eb4172bbcd9c717bcef67a34a49e55e4"],["C:/Users/11818/MyBlog/public/lib/giteement.browser.js","c1f7b974241e42c336b6ade5acb69937"],["C:/Users/11818/MyBlog/public/lib/gitment.css","7b41ad5dacebea480b8e412d9b667b2c"],["C:/Users/11818/MyBlog/public/lib/gitment.js","615e4c0a7d511e758acc1d2bb0f85de6"],["C:/Users/11818/MyBlog/public/lib/jquery-2.1.4.min.js","f9c7afd05729f10f55b689f36bb20172"],["C:/Users/11818/MyBlog/public/lib/oauthcallback.browser.js","255872d09f9fc297ab4eff9755ebe284"],["C:/Users/11818/MyBlog/public/lib/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["C:/Users/11818/MyBlog/public/lib/snow.js","09b8b45df29afc1351644d5093a0bc51"],["C:/Users/11818/MyBlog/public/live2d_models/chitose/assets/moc/chitose.2048/texture_00.png","792d7ce14129275aa940798f3fcad987"],["C:/Users/11818/MyBlog/public/live2d_models/epsilon2_1/assets/moc/Epsilon2.1.2048/texture_00.png","abee4cdeb8018032163ffdc0a16020b0"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_00.png","636278314f542d55077de8f0ad411cb8"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_01.png","12e07b8f6448dd55f38460ff43971a06"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_02.png","42adca6365574e3d39baf00364427a3a"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_03.png","3d567322e41164927b8b537ef158e5b0"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_04.png","421faf5d4e2a5e5e6efc73a2f121b65b"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_05.png","3f0da7f456691c8ca86d8085887f0df7"],["C:/Users/11818/MyBlog/public/live2d_models/gf/assets/moc/Gantzert_Felixander.2048/texture_06.png","575df42ce5be86765eba21f5a44864e1"],["C:/Users/11818/MyBlog/public/live2d_models/haru/01/assets/moc/haru01.1024/texture_00.png","4685fe8c12b19e64bf29cb81c0f01af1"],["C:/Users/11818/MyBlog/public/live2d_models/haru/01/assets/moc/haru01.1024/texture_01.png","49c7928d79f4bf012a203d0c4d6fa0b9"],["C:/Users/11818/MyBlog/public/live2d_models/haru/01/assets/moc/haru01.1024/texture_02.png","aeaefa34e3a53d542fde03907813db7d"],["C:/Users/11818/MyBlog/public/live2d_models/haru/02/assets/moc/haru02.1024/texture_00.png","4685fe8c12b19e64bf29cb81c0f01af1"],["C:/Users/11818/MyBlog/public/live2d_models/haru/02/assets/moc/haru02.1024/texture_01.png","49c7928d79f4bf012a203d0c4d6fa0b9"],["C:/Users/11818/MyBlog/public/live2d_models/haru/02/assets/moc/haru02.1024/texture_02.png","80241fbfdd9010bf4bb19e031f0ccb2e"],["C:/Users/11818/MyBlog/public/live2d_models/haruto/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["C:/Users/11818/MyBlog/public/live2d_models/hibiki/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["C:/Users/11818/MyBlog/public/live2d_models/hijiki/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/11818/MyBlog/public/live2d_models/izumi/assets/moc/izumi_illust.1024/texture_00.png","a6af8249dc4e2913450035ea3fc72851"],["C:/Users/11818/MyBlog/public/live2d_models/izumi/assets/moc/izumi_illust.1024/texture_01.png","37f1c233cc5ad4bf0434c6f96d7f2ab3"],["C:/Users/11818/MyBlog/public/live2d_models/izumi/assets/moc/izumi_illust.1024/texture_02.png","ac9b0f0ed28504c93fd9651c3eacbcbc"],["C:/Users/11818/MyBlog/public/live2d_models/izumi/assets/moc/izumi_illust.1024/texture_03.png","19183e4b8dbebdb3365461f3b91dde6f"],["C:/Users/11818/MyBlog/public/live2d_models/koharu/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["C:/Users/11818/MyBlog/public/live2d_models/miku/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["C:/Users/11818/MyBlog/public/live2d_models/ni-j/assets/moc/ni-j.2048/texture_00.png","90517165911a785cc29a71c66c2c5867"],["C:/Users/11818/MyBlog/public/live2d_models/ni-j/assets/moc/ni-j.2048/texture_01.png","1754d11829dfe75cf86405d5a98ca537"],["C:/Users/11818/MyBlog/public/live2d_models/nico/assets/moc/nico.2048/texture_00.png","90517165911a785cc29a71c66c2c5867"],["C:/Users/11818/MyBlog/public/live2d_models/nico/assets/moc/nico.2048/texture_01.png","720a22559bb19baa113d3f8ec700ac74"],["C:/Users/11818/MyBlog/public/live2d_models/nico/assets/moc/nico.2048/texture_02.png","873344a63dbc0bc515d086ffb4403c27"],["C:/Users/11818/MyBlog/public/live2d_models/nietzsche/assets/moc/nietzsche.2048/texture_00.png","90517165911a785cc29a71c66c2c5867"],["C:/Users/11818/MyBlog/public/live2d_models/nietzsche/assets/moc/nietzsche.2048/texture_01.png","6624477ba499bedd2e3f8d651ba9a5f9"],["C:/Users/11818/MyBlog/public/live2d_models/nietzsche/assets/moc/nietzsche.2048/texture_02.png","ad8d8105dab424eab4cda0404163c736"],["C:/Users/11818/MyBlog/public/live2d_models/nipsilon/assets/moc/nipsilon.2048/texture_00.png","89816949aed4dc3734d894598844c34d"],["C:/Users/11818/MyBlog/public/live2d_models/nipsilon/assets/moc/nipsilon.2048/texture_01.png","90517165911a785cc29a71c66c2c5867"],["C:/Users/11818/MyBlog/public/live2d_models/nipsilon/assets/moc/nipsilon.2048/texture_02.png","cc219978974dc916c80f5bf13ede8204"],["C:/Users/11818/MyBlog/public/live2d_models/nito/assets/moc/nito.2048/texture_00.png","89816949aed4dc3734d894598844c34d"],["C:/Users/11818/MyBlog/public/live2d_models/nito/assets/moc/nito.2048/texture_01.png","90517165911a785cc29a71c66c2c5867"],["C:/Users/11818/MyBlog/public/live2d_models/shizuku/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["C:/Users/11818/MyBlog/public/live2d_models/shizuku/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["C:/Users/11818/MyBlog/public/live2d_models/shizuku/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["C:/Users/11818/MyBlog/public/live2d_models/shizuku/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["C:/Users/11818/MyBlog/public/live2d_models/shizuku/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["C:/Users/11818/MyBlog/public/live2d_models/shizuku/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["C:/Users/11818/MyBlog/public/live2d_models/tororo/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["C:/Users/11818/MyBlog/public/live2d_models/tsumiki/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["C:/Users/11818/MyBlog/public/live2d_models/tsumiki/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["C:/Users/11818/MyBlog/public/live2d_models/unitychan/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["C:/Users/11818/MyBlog/public/live2d_models/wanko/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["C:/Users/11818/MyBlog/public/live2d_models/z16/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["C:/Users/11818/MyBlog/public/live2d_models/z16/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["C:/Users/11818/MyBlog/public/live2d_models/z16/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["C:/Users/11818/MyBlog/public/live2dw/assets/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["C:/Users/11818/MyBlog/public/live2dw/assets/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["C:/Users/11818/MyBlog/public/live2dw/assets/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["C:/Users/11818/MyBlog/public/live2dw/assets/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["C:/Users/11818/MyBlog/public/live2dw/assets/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["C:/Users/11818/MyBlog/public/live2dw/assets/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["C:/Users/11818/MyBlog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/11818/MyBlog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/11818/MyBlog/public/main.a5fda8.css","bc2a0706b00f2d91efa69f67ae3333bb"],["C:/Users/11818/MyBlog/public/main.a5fda8.js","17f5d51336a4fdf6985bb428a7203552"],["C:/Users/11818/MyBlog/public/mobile.a2c207.js","885fe05bcbf8a66ca75ee2649ba142a1"],["C:/Users/11818/MyBlog/public/plugins/TweenMax/HoverImg.js","88db773f904f63305962008dfca30fec"],["C:/Users/11818/MyBlog/public/plugins/TweenMax/TweenMax.min.js","4b0d7645edfb6f68c4aa331835960f86"],["C:/Users/11818/MyBlog/public/plugins/TweenMax/charming.min.js","45da911a977b3961bb3de8af2040559a"],["C:/Users/11818/MyBlog/public/plugins/activate-power-mode/activate-power-mode.js","c196ffaddbaee510820d45164d66312c"],["C:/Users/11818/MyBlog/public/plugins/live2d-widget.js/L2Dwidget.0.min.js","24def45332a8b3590f74df1a75be9acc"],["C:/Users/11818/MyBlog/public/plugins/live2d-widget.js/L2Dwidget.common.js","7a9bdb9bb01c7d76f164f47d89b661e0"],["C:/Users/11818/MyBlog/public/plugins/live2d-widget.js/L2Dwidget.min.js","cf8f4a4066833acc63eadc810729248c"],["C:/Users/11818/MyBlog/public/plugins/ribbon.js/demo/index.html","6a4a47f35867c23059caddb156402cad"],["C:/Users/11818/MyBlog/public/plugins/ribbon.js/ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["C:/Users/11818/MyBlog/public/plugins/ribbon.js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["C:/Users/11818/MyBlog/public/slider.27463f.js","9e709dd7a154ef39ffebc37b3bd17cc6"],["C:/Users/11818/MyBlog/public/tags/index.html","2fdee8ce78557145bbf4eb14d054d88f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







