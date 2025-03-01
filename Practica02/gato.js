const Animal = require(`./animal`)

class Gato extends Animal {
    constructor(nombre, raza, color) { 
        super(nombre, raza, color)  
    }
    sonido(){
        console.log("Miau miau!!");
        
    }
}
let gato1 = new Gato("Michi", "Albino", "Negro");
gato1.sonido()