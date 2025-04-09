"use strict";

// /**
//  * Para utilizar las funciones a continuacion es necesario el new
//  */

// const fecha = new Date();

// console.log(fecha)

// /**
//  * getDate()
//  * Esto nos devuelve el mes
//  */

// console.log(fecha.getDate())

// /**
//  * getDay()
//  * Esto nos devuelve el dia de la semana en un indice
//  * 
//  * Domingo = 0
//  * Lunes = 1
//  * Martes = 2
//  * Miercoles = 3
//  * Jueves = 4
//  * Viernes= 5
//  * Sabado= 6
//  */

// console.log(fecha.getDay());

// /**
//  * getMonth()
//  * 
//  * Esto nos devuelve el mes en forma de indice -1
//  *  
//  */

// console.log(fecha.getMonth());

// /**
//  * getYear()
//  * Esto nos devuelve el año actual -1900
//  * 
//  * Ejemplo: 2025 --> 125
//  * 
//  * Esto se puede solucionar sumandole 1900 dentro del console.log o poniendo la siguiente API
//  * 
//  * getFullYear()
//  */

// console.log(fecha.getYear());
// console.log(fecha.getYear()+1900);
// console.log(fecha.getFullYear());

/**
 * getHours()
 * Esto nos devuelve la hora actual del dia
 * 
 * getMinutes()
 * Esto nos devuelve los minutos actual del dia
 * 
 * getSeconds()
 * Esto nos devuelve los segundos actuales del dia
 */

// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());

/**
 * Ejemplo reloj
 */
const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
}

actualizarHora();

setInterval(actualizarHora,1000);
