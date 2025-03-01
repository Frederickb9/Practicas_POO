const { error } = require('console');
const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout, 
});

class Usuraio {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getName(){
        return this.nombre
    }
    setName(newName){
        this.nombre = newName;
    }
    showInfo(){
        console.log(`Usuario: ${this.nombre} | Edad: ${this.edad}`);
    }
}
rl.question("Ingrese su nombre: ", (nombre)=>{
    rl.question("Ingrese su edad: ", (edad)=>{
        const usuario1 = new Usuraio(nombre, parseInt(edad));
        usuario1.showInfo()
        console.error("_____________________________")
        usuario1.setName("Nuevo nombre: Frederick")
        usuario1.showInfo()
        rl.close();
    })
})