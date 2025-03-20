const Comunicacion = {
    enviarMensaje(mensaje){
        console.log(`${this._nombre} envió: ${mensaje}`);
    }
}

const Registro = {
    registrarAccion(accion){
        console.log(`${this._nombre} realizó: ${accion}`);
    }
}

class Usuario {
    constructor(nombre){
        this._nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Comunicacion, Registro);

const usuario1 = new Usuario("Frederick");
usuario1.registrarAccion("Inicio de sesión...");
usuario1.enviarMensaje("Hola mundo!");