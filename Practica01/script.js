const Coche = {
    marca: "Toyota",
    modelo:"Corolla",
    anio: 2022,
    encendido: false,

    encender:function(){
        this.encendido ? console.log(`Vas a joder el auto`): console.log(`Encendiendo auto...`);
        Coche.encendido = true;
    },
    apagar:function(){
        if (this.encendido) {
            console.log(`Apagando auto...`);
            this.encendido = true;
        }else{
            console.log(`El auto ya está apagado`);
        }
    },
    info:function(){
        return `Este coche es un ${this.marca} ${this.modelo} del año ${this.anio}`;
    }
}
console.log(Coche.encender());
console.log(Coche.apagar());

console.log(Coche.info());