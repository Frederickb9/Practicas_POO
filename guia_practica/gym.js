class Persona{
    constructor(nombre, peso, altura){
        this._nombre = nombre;
        this._peso = peso;
        this._altura = altura;
    }
    calcularImc(){
        return this._peso / (this._altura * this._altura);
    }
    mostrarImc(){
        const imc = this.calcularImc();
        console.log(`El IMC ${this._nombre} es: ${imc.toFixed(2)}`);
    }
}
//Ingresar peso en kilogramos y estatura en metros
const persona1 = new Persona('Frederick', 86.2, 1.93);
const persona2 = new Persona('Juan', 60, 1.72);
persona1.mostrarImc();
persona2.mostrarImc();