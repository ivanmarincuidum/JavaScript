"use strict";

// normalmente representado por ...

/**
 * Permite unir un array a otro array
 */

let arr = ["manzana","pera","banana"];
let arr2 = ["kiwi","naranja"];

arr.push(...arr2);

console.log(arr);

/**
 * Concatenar arrays
 */

let arr3 = [...arr,...arr2];

console.log(arr3);

/**
 * Como argumento rest
 */

const sumar = (num1,num2,num3,num4)=>{
    console.log(num1 + num2 + num3 + num4)
}

let arr4 = [3,6,4,1];

sumar(...arr4)