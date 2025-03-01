const Animal = require('./animal')

class Perro extends Animal{
    constructor(nombre, raza, color) {
        super(nombre, raza, color)
    }
    getName(){
        return super.getName()
    }
    sonido(){
        console.log("Gua Gua!!!!");
        
    }
}

let perro1 = new Perro("Jordan", "Pitbull", "Negro");
console.log(perro1.getName());
perro1.sonido()