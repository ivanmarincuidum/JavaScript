// const newFechaUTC = dias =>{
//     let fecha = new Date();
//     fecha.setTime(fecha.getTime() + dias*1000*60*60*24)
//     return fecha.toUTCString();
// }

// const crearCookies = (name,dias)=>{
//     expires = newFechaUTC(dias)
//     document.cookie = `${name};expire=${expires}`;
// }

// crearCookies("usuario=dalto","4");

// const obtenerCookie = cookieName=>{
//     let cookies = document.cookie;
//     cookies = cookies.split(";");
//     for (i = 0; cookies.length > i; i++){
//         cookie = cookies[i].trim();
//         if (cookie.startsWith(cookieName)) {
//             return cookie.split("=")[1];
//         } 
//     }
//     return "no hay cookies con ese nombre";
// }



