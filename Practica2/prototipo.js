class Objeto {
    constructor() {};
    hablar(){
        console.log("hola")
    }
}

const objeto = new Objeto();

objeto.hablar = ()=>{
    console.log("hablando desde afuera")
}

let arr = [];

arr.__proto__ = objeto;

arr.hablar()