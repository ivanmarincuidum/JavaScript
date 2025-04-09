"strict mode";

const validarEdad = (msg)=>{
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "Introduce un numero para la edad";
        if (edad >= 18) console.log ("sos mayor de edad");
        else console.log("sos menor de edad");
    } catch(e){
        validarEdad(e)
    }
}

validarEdad()