function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1= crearUsuario('Ivan', 'ivan@holamundo.io');
let user2= crearUsuario('Felipe', 'felipe@holamundo.io');

console.log(user1, user2);