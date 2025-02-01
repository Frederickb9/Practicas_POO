class Estudiante{
    constructor(nombre){
        this._nombre = nombre;
        this._sancion = {
            "Llegada tardía": 1,
            "Caminar por los pasillos en horarios de clase": 3,
            "No andar vestimenta apropiada": 5,
            "No hacer uso adecuado de las instalaciones": 10
        };
    }
    calcularSancion(falta){
        return this._sancion[falta];
    }
    mostrarSancion(falta){
        const sancion = this.calcularSancion(falta);
        console.log(`El estudiante ${this._nombre} cometio la falta "${falta}" y debe cancelar $${sancion}.`)
    }
}
const estudiante1 = new Estudiante('Frederick');
estudiante1.mostrarSancion('Llegada tardía');
estudiante1.mostrarSancion('No hacer uso adecuado de las instalaciones');