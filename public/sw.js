if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),f={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UgxyfGtQhgrKCWsj_rUtK/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/UgxyfGtQhgrKCWsj_rUtK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/12038df7-241289a2a9bc3c98.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/173-7f86e054564dce59.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/279-553cf200228071de.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/3627521c-15c6d6bcc67a3676.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/38-c29949533aad85dd.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/771-6591dd56df2bce73.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/805-7846e3951b36e807.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/849-5189a1a2f83928d8.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/98916abf-f8d6236c47c67e93.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(auth)/layout-1dbc2774095b9b5a.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(auth)/signin/page-e3b843e1a38e2a87.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(auth)/signup/page-ef4a9c2924dd9240.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(dashboard)/admin/editUser/%5Bid%5D/page-72cdd2cf48e6b167.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(dashboard)/admin/page-3ff055a36529d206.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(dashboard)/layout-ef02aa9e40030eb3.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/(dashboard)/profile/page-dcd1d9522faff532.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/_not-found-86f309c6b5f76c59.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/layout-657936cdcd102548.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/app/page-3bb21f0fa4744af9.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/fd9d1056-f7edfe11d5d4eb08.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/main-2e406b4fe455a5e3.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/main-app-83b7ce9fa4dc2864.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8903cd7d9959b69f.js",revision:"UgxyfGtQhgrKCWsj_rUtK"},{url:"/_next/static/css/81f1a713e82b6637.css",revision:"81f1a713e82b6637"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
