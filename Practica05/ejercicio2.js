class Padre {
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    saludar(){
        console.log(`Hola! Mi nombre es ${this._nombre} y tengo ${this._edad} años.`);
    }
}

class Hija extends Padre{
    constructor(nombre, edad){
        super(nombre, edad);
    }
}

const hija = new Hija("Yoselin", 12);
hija.saludar();