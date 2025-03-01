class Empleado {
    #sueldo;
    constructor(nombre, puesto, sueldo) {
        this.puesto = puesto;
        this.nombre = nombre;
        this.#sueldo = sueldo;
    }
    getSueldo(){
        return this.#sueldo
    }
    setSueldo(nuevoSueldo){
        if (nuevoSueldo > this.#sueldo) {
            this.#sueldo = nuevoSueldo;
        }else{
           console.log("Jodase!");
        }
    }
    showInfo(){
        console.log(`Empleado: ${this.nombre}. Puesto: ${this.puesto}. Sueldo: ${this.#sueldo}`);
    }
}
const empleado1 = new Empleado("Frederick", "Desarrollador de Software", "600")
empleado1.showInfo()
empleado1.setSueldo(100);
empleado1.showInfo()
empleado1.setSueldo(2000)
empleado1.showInfo()