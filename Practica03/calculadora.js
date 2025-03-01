class Calculadora {
    static sumar (a,b){
        return a+b;
    }
    static restar (a,b){
        return a-b;
    }
    static dividir(a,b){
        if (b!=0) {
            return a/b
        }else{
            console.log("Infinito");
        }
    }
}

console.log(Calculadora.sumar(5,4));
console.log(Calculadora.restar(5,4));
console.log(Calculadora.dividir(5,4));