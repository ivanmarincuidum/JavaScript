let obj = {};
let obj2 = new Object();

/**
 * new Arra(); []
 * new String(); "" '' 
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario1() {
    this.name = 'Chanchito feliz';
}
let user = new Usuario1();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s2.valueOf());