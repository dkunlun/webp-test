/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache-manifest.d5810f833353e1537c555da6a39b31c8.js"
);

workbox.core.setCacheNameDetails({prefix: "demo"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Listen to fetch events
self.addEventListener('fetch', function(event) {

	// Clone the request
	var req = event.request.clone();

  	// Check if the image is a jpeg
  	if (/\.jpg$|.png$/.test(event.request.url)) {

  		// Get all of the headers
  		let headers = Array.from(req.headers.entries());

  		// Inspect the accept header for WebP support
  		var acceptHeader = headers.find(item => item[0] == 'accept');
  		var supportsWebp = acceptHeader[1].includes('webp');

  		// If we support WebP
  		if (supportsWebp)
  		{
        // Build the return URL
  			var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";

          event.respondWith(
          fetch(returnUrl, {
            mode: 'no-cors'
          })
        );
  	}
	}
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
