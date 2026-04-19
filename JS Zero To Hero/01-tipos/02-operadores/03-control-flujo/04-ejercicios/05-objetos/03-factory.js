function crearUsuario() {
    return{
        email: "nico@holamundo.io",
        name: "Nicolas",
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando clave...");
        },
    };
};

