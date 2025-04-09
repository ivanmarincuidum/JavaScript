"use strict";

const IDBRequest = indexedDB.open("daltobase", 1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    })
})

IDBRequest.addEventListener("success", ()=>{
    console.log("todo salió correctamente");
})

IDBRequest.addEventListener("error", ()=>{
    console.log("ocurrió un error al abrir la base de datos")
})

const addObjeto = ojeto => {
    const db = IDBRequest.result;
    const transaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.addEventListener("complete", ()=>{
        console.log("objeto agregado correctamente")
    })
}

const leerObjetos = ()=>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres","readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue()
        } else console.log("todos los datos fueron leidos");
    })
}

const modificarObjeto = (key, objeto) => {
    const db = IDBRequest.result;
    const transaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.put(objeto,key);
    IDBtransaction.addEventListener("complete", ()=>{
        console.log("objeto modificado correctamente")
    })
}

const modificarObjetos = key => {
    const db = IDBRequest.result;
    const transaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBTransaction.objectStore("nombres");
    objectStore.delete(key);
    IDBtransaction.addEventListener("complete", ()=>{
        console.log("objeto eliminado correctamente")
    })
}