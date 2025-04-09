"use strict";

this.nombre= "Dalto";

function saludar(){
    console.log(`Hola ${this.nombre}`);
}

const objeto = {
    nombre: "Lucas",
    saludar
}

function otroContext(){
    this.nombre = "Roberto";
    this.saludar = saludar;
}

const objeto2 = new otroContext();

objeto.saludar()

objeto2.saludar()

console.log(this.nombre)