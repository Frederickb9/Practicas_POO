class Loteria{
    constructor(nombre, numero, cantidad){
        this._nombre = nombre;
        this._numero = numero;
        this._cantidad = cantidad;
    }
    juegoDeLoteria(){
        let numeroAleatorio = Math.floor(Math.random() * 100);
        if(numeroAleatorio === this._numero){
            let premio = this._cantidad * 20;
            console.log(`Felicidades ${this._nombre} ha acertado el numero aleatorio, haciendose ganador con un premio de $${premio}`);
        } else {
            console.log(`No ha acertado el numero, la opcion correcta era: ${numeroAleatorio}. Intentelo nuevamente`);
        }
    }
}
const jugador1 = new Loteria('Frederick', 10, 5)
jugador1.juegoDeLoteria();