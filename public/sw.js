let cachedData= "appV1"
this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cachedData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/vendors~main.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
                "/users"
            ])
        })
    )
})

this.addEventListener('fetch', (event)=>{
    if(!navigator.onLine){

        if(event.request.url==="http://localhost:3000/static/js/main.chunk.js"){
            event.waitUntil(
                this.registration.showNotification("Internet",{
                    body: "Internet not working"
                })
            )
        }

        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp
                }
                let requestUrl = event.request.clone()
                fetch(requestUrl)
            })
        )
    }
    
})