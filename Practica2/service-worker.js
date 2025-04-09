self.addEventListener("install",e=>{
    console.log("instalando service worker")
})

self.addEventListener("activate",()=>{
    console.log("elservice worker esta activo")
})

self.addEventListener("fecth",()=>{
    console.log("service worker interceptando peticion")
})

self.addEventListener("message",e=>{
    console.log("Mensaje recibido del service Worker");
    console.log(e.data);
    e.source.postMessage("hola brother")
})