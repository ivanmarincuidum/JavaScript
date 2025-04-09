"use strict";

/**
 * LocalStorage
 * Esto lo que hace es almacenar los Items que nosotros le digamos en un almacenamiento que no se elimina si se cierra la pagina
 */

// localStorage.setItem("nombre","pedro");

// console.log(localStorage)

// let nombre = localStorage.getItem("nombre");

// console.log(nombre)

/**
 * SesionStorage
 * Esto lo que hace es almacenar los Items que nosotros le digamos en un almacenamiento que se elimina al cerra la pagina, ya que almacena la sesion actual
 * 
 * Para comprobar simplemente se comenta la linea que le agregamos los Items al SessionStorage y cerramos la pagina y la volvemos a abrir
 */
// sessionStorage.setItem("nombre","pedro");

// console.log(sessionStorage)

// let nombre2 = sessionStorage.getItem("nombre");

// console.log(nombre2)

/**
 * removeItem()
 * Esto lo que hace es eliminar un Item que nosotros le indiquemos
 */

// setTimeout(()=>{
//     let nombre = localStorage.removeItem("nombre");
//     let nombre2 = sessionStorage.removeItem("nombre");
// },2000)

/**
 * clear()
 * Esto a diferencia de eliminar solo 1 Item como el revomeItem lo que hace es eliminar todo dentro de LocalStorage o SessionStorage
 */

// setTimeout(()=>{
//     let nombre = localStorage.clear("nombre");
//     let nombre2 = sessionStorage.clear("nombre");
// },2000)

/**
 * Ejemplo --> Cambiar idioma
 */

const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal()
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarModal
    })
}

const cerrarModal = ()=>{
    document.querySelector(".modal-overlay");
    modal.style.animation ="desaparecer 1s fordwards"
    setTimeout(()=>{modal.style.display = "none",1000});

}

const idioma = localStorage.getItem("idioma");

if (idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}