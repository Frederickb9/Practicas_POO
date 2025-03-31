"use strict";
//Clase Base|Clase padre
class Figura {
    //Metodo para calcular area
    calcularArea(){
        throw new Error("Este metodo debe de ser implementado por las sub clases o clases hijas");
    }
}
class Circulo extends Figura {
    constructor(radio){
        super();
        this.radio = radio;
    }

    //Sobre escritura del metodo calcular area o polimorfismo
    calcularArea(){
        return Math.PI * this.radio **2;
    }
}

class Rectangulo extends Figura {
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return (this.base * this.altura) / 2;
    }
}

class Triangulo extends Figura {
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return (this.base * this.altura) / 2;
    }
}
//Funcion que recibe un array de figuras y calcula sus areas
function calcularArea(figuras){
    figuras.forEach((figura) =>{
        console.log(`Area de ${figura.constructor.name}: ${figura.calcularArea().toFixed(2)}`);
    })
}
const figuras = [
    new Circulo(8),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];

calcularArea(figuras);