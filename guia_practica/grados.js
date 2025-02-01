class ConversorTemperatura{
    constructor(temperatura, escala){
        this._temperatura = temperatura;
        this._escala = escala;
    }
    fahrenheitACelsius(){
        if(this._escala === 'F'){
            return (this._temperatura - 32) * 5/9; 
        }
    }
    celsiusAFahrenheit(){
        if(this._escala === 'C'){
            return (this._temperatura * 9/5) + 32; 
        }
    }
    kelvinAFahrenheit(){
        if(this._escala === 'K'){
            return (9/5 * (this._temperatura - 273.15)) + 32;
        }
    }
    kelvinACelsius(){
        if(this._escala === 'K'){
            return this._temperatura - 273.15;
        }
    }
    mostrarConversiones(){
        if(this._escala === 'F'){
            const tempConvertida = this.fahrenheitACelsius();
            console.log(`La conversion de Fahrenheit a Celsius es: ${tempConvertida.toFixed(2)}`);
        } else if(this._escala === 'C'){
            const tempConvertida = this.celsiusAFahrenheit();
            console.log(`La conversion de Celsius a Fahrenheit es: ${tempConvertida.toFixed(2)}`);
        }else if(this._escala === 'K'){
            const tempConvertida = this.kelvinACelsius();
            const tempConvertida2 = this.kelvinAFahrenheit();
            console.log(`La conversion de Kelvin a Celsius es: ${tempConvertida.toFixed(2)}`);
            console.log(`La conversion de Kelvin a Fahrenheit es: ${tempConvertida2.toFixed(2)}`);
        }else{
            console.error('Escala no identificada.')
        }
    }
}

const temperatura1 = new ConversorTemperatura(90, 'F');
const temperatura2 = new ConversorTemperatura(30, 'C');
const temperatura3= new ConversorTemperatura(200, 'K');
temperatura1.mostrarConversiones();
temperatura2.mostrarConversiones();
temperatura3.mostrarConversiones();