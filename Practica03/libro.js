class Libro {
    constructor(titulo, autor, añoPublicacion) {
        this._titulo = titulo;
        this._autor = autor;
        this._añoPublicacion = añoPublicacion;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, autor, añoPublicacion) {
        const nuevoLibro = new Libro(titulo, autor, añoPublicacion);
        this.libros.push(nuevoLibro);
        console.log(`El libro ${titulo} ha sido agregado a la biblioteca`);
    }

    buscarPorTitulo(titulo) {
        const libroEncontrado = this.libros.filter(libro => libro._titulo.toLowerCase().includes(titulo.toLowerCase()));
        if (libroEncontrado.length > 0) { 
            
            console.log(`Libro Encontrado`);
            libroEncontrado.forEach(libro => {
                console.log(`${libro._titulo} de ${libro._autor} publicado en ${libro._añoPublicacion}`);
            });
        } else {
            console.log(`Libro no encontrado`);
        }
    }

    mostrarLibros() {
        if (this.libros.length > 0) {
            console.log(`Libros disponibles:`);
            this.libros.forEach(libro => {
                console.log(`${libro._titulo} de ${libro._autor} publicado en ${libro._añoPublicacion}`);
            });
        } else {
            console.log(`Biblioteca vacía!`);
        }
    }
}

const miBiblioteca = new Biblioteca();
miBiblioteca.mostrarLibros();

miBiblioteca.agregarLibro("100 años de Soledad", "Gabriel García Marquéz", "1967");
miBiblioteca.mostrarLibros();

miBiblioteca.buscarPorTitulo("100 años de Soledad");