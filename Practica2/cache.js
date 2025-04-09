// "use strict";

caches.open("archivos-estaticos").then(cache => {
    cache.addAll(["index.html","estilo.css","cache.js"])
    cache.keys().then(res=>{
        console.log(res)
    })
})