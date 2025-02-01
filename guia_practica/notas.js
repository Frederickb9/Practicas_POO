class Nota{
    constructor(titulo, detalle){
        this._titulo = titulo;
        this._detalle = detalle;
    }
    contarPalabras(){
        const palabras = this._detalle.trim().split(/\s+/);
        return palabras.length;
    }
    mostrarCantidadPalabras(){
        const cantidadPalabras = this.contarPalabras();
        console.log(`La nota titulada "${this._titulo}" tiene ${cantidadPalabras} palabras en el detalle.`);
    }
}
const nota1 = new Nota('Reunion urgente', 'reunion de caracter urgente en el CT7');
const nota2 = new Nota('Hola a todos', 'quiero aprovechar esta oportunidad para mandarles un afectuoso saludo.');
nota1.mostrarCantidadPalabras();
nota2.mostrarCantidadPalabras();