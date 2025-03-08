class Estudiante{
    _nombre;
    _edad;
    _promedio;
    _activo;
    constructor(nombre, edad, promedio, activo){
        this._nombre = nombre;
        this._edad = edad;
        this._promedio = promedio;
        this._activo = activo;
    }
    get Nombre(){
        return this._nombre;
    }
    get Edad(){
        return this._edad;
    }
    get Promedio(){
        return this._promedio;
    }
    get Activo(){
        return this._activo;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }
    set Edad(edad){
        this._edad = edad;
    }
    set Promedio(promedio){
        this._promedio = promedio;
    }
    set Activo(activo){
        this._activo = activo;
    }

    actualizarPromedio(nuevaCalificacion){
        if(this._edad > 0 && nuevaCalificacion >= 0 && nuevaCalificacion <= 10 && this._activo){
            this._promedio = nuevaCalificacion;
        }else{
            console.error("No se puede actualizar el promedio");
        }
    }
    cambiarEstado(){
        this._activo = !this._activo;
    }
    mostrarInformacion(){
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Edad: ${this._edad}`);
        console.log(`Promedio: ${this._promedio}`);
        console.log(`Activo: ${this._activo}`);
    }
}

const estudiante = new Estudiante("Frederick", 18, 10, true);
console.log(estudiante.Nombre)