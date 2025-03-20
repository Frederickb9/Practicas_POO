const Autenticacion = {
    login(usuario){
        console.log(`${usuario} ha iniciado sesión.`);
    }
};

const Notificacion = {
    enviarNotificacion(mensaje){
        console.log(`Notificación: ${mensaje}`);
    }
};

class Usuario {
    constructor(nombre){
        this._nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificacion);

const user1 = new Usuario("Frederick");
user1.login(user1._nombre);
user1.enviarNotificacion("Tienes un mensaje pendiente.");