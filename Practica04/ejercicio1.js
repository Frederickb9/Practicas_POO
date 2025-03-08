class cuentaBancaria{
    _numeroCuenta;
    _titular;
    _saldo;
    _activa;
    constructor(numeroCuenta, titular, saldo, activa){
        this._numeroCuenta = numeroCuenta;
        this._titular = titular;
        this._saldo = saldo;
        this._activa = activa;
    }

    get NumeroCuenta(){
        return this._numeroCuenta;
    }
    get Titular(){
        return this._titular;
    }
    get Saldo(){
        return this._saldo;
    }
    get Activa(){
        return this._activa;
    }

    set NumeroCuenta(numeroCuenta){
        this._numeroCuenta = numeroCuenta;
    }
    set Titular(titular){
        this._titular = titular;
    }
    set Saldo(saldo){
        this._saldo = saldo;
    }
    set Activa(activa){
        this._activa = activa;
    }
    Depositar(monto){
        this._saldo += monto;
    }
    Retirar(monto){
        if(this._saldo >= monto && this._activa){
            this._saldo -= monto;
        }else{
            console.error("No se puede retirar el monto.")
        }
    }
    mostrarInformacion(){
        console.log(`Numero de cuenta: ${this._numeroCuenta}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: ${this._saldo}`)
    }
}
const cuenta1 = new cuentaBancaria("123456", "Frederick", 1000, true);
cuenta1.mostrarInformacion();
cuenta1.Retirar(1000);
cuenta1.mostrarInformacion();