class Animal {
    #name;  //Atributo privado
    _raza;  //Atributo protegido
    color;  //Atributo publico

    constructor(name, raza, color) {
        this.#name=name;
        this._raza=raza;
        this.color=color;
    }
    //Metodos getters
    getName(){
        return this.#name;
    }
    sonido(){
        console.log(`El animal esta haceindo un sonido`);
    }
}

module.exports= Animal;