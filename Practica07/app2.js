"use strict";
class Vehiculos {
    moverse(){
        throw new Error("Este metodo debe ser implementado por las sub clases o clases hijas");
    }
}
class Coche extends Vehiculos {
    constructor(marca, modelo){
        super();
        this.marca = marca;
        this.modelo = modelo;
    }
    moverse(){
        return `El vehiculo ${this.marca} ${this.modelo} esta moviendose`;
    }
}
class Bicicleta extends Vehiculos {
    constructor(tamano, marca){
        super();
        this.tamano = tamano;
        this.marca = marca;
    }
    moverse(){
        return `La bicicleta ${this.tamano} ${this.marca} esta moviendose`;
    }
}
class Avion extends Vehiculos {
    constructor(aerolinea, numeroVuelo){
        super();
        this.aerolinea = aerolinea;
        this.numeroVuelo = numeroVuelo;
    }
    moverse(){
        return `El vuelo ${this.numeroVuelo} ${this.aerolinea} esta en movimiento`;
    }
}
let miPrimerVehiculo = new Coche("Toyota", "Corolla");
console.log(miPrimerVehiculo.moverse());
let miPrimerBicicleta = new Bicicleta(20, "Corsario");
console.log(miPrimerBicicleta.moverse());
let miPrimerAvion = new Avion("Boeing", "25");
console.log(miPrimerAvion.moverse());