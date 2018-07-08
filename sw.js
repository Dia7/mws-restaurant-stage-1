self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open('mvs-restaurant-001').then(function (cache) {
            return cache.addAll([
                '/',
                'index.html',
                'restaurant.html',
                'css/styles.css',
                'data/restaurant.json',
                // 'js/',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                // 'img/',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'img/not-available.jpg',
                'js/register_sw.js'
            ]);
        })
    );
});

// self.addEventListener("fetch", function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (yes) {
//             return yes || fetch(event.request).then(function (response) {
//                 return caches.open('mvs-restaurant-001').then(function (cache) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });

self.addEventListener("fetch", function(event) {
    // let cacheRequest = event.request;
    var cacheUrlObj = new URL(event.request.url);
    if(event.request.url.indexOf("restaurant.html") > -1) {
        event.request = new Request("restaurant.html");
    }
    if (cacheUrlObj.hostname !== "localhost") {
        event.request.mode = "no-cors";
    }

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return (
                response || fetch(event.request).then (function(fetchResponse) {
                    return caches.open('mvs-restaurant-001').then(function(cache) {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                }
                ).catch(function (error) {
                    if (event.request.url.indexOf(".jpg") > -1) {
                        return caches.match("/img/not-available.jpg");
                    }
                    return new Response("There is no internet connection", {
                        status: 404,
                        statusText: "There is no internet connection"
                    });
                })
            );
        })
    );
});