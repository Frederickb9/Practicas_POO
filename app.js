//Una clase es una plantilla que simboliza o instancia objetos con propiedades para su aplicacion modular
class Logueo{ //La clase

    constructor(usuario, contrasenia){//constructor de propiedades
        this._usuario = usuario;
        this._contrasenia = contrasenia;
    }
    //metodos, funciones o compotamientos
    inciar_sesion(){
        return `El usuario ${this._usuario} ha iniciado sesion con contraseña ${this._contrasenia} ah iniciado sesion`
    }
    ver_historias(){
        return `El usuario ${this._usuario} ha iniciado sesion con contraseña ${this._contrasenia} ve las historias de sus amigos`
    }
    ver_publicaciones(){

    }
    buscar(){

    }
}
//Los objetos usan los parametros que nosotros creamos en el contructor
let autorizacion = new Logueo("changuito", 1234);
let autorizacion2 = new Logueo("Artur", 123);
//Esta es la estructura
console.log(autorizacion.inciar_sesion());
console.log(autorizacion2.ver_historias()); //Imprime el mensaje pero con los parametros de la segunda autorizacion