class Coche {
    constructor(marca, modelo, anio, encendido) {
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.encendido = false;
    }
    showInfo(){
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio}`);
    }
    encender(){
        if (this.encendido) {
            console.log("El auto está encendido.");
        }else{
            console.log("El auto está apagado...");
        }
    }
    apagar(){
        if (this.encendido) {
            console.log("El auto está apagado...");
        }else{
            console.log("El auto está encendido.");
        }
    }
}
const auto1 = new Coche ("Toyota", "Corolla", 2022, true)
auto1.encender()
auto1.apagar()