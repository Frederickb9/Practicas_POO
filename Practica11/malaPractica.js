class Tienda {
    constructo(){
        this.inventario = [];
        this.clientes = [];
    }

    agregarProducto(producto){
        this.inventario.push(producto);
    }

    registrarClientes(cliente){
        this.clientes.push(cliente);
    }

    venderProducto(cliente, producto){
        console.log(`Vendido ${producto} a ${cliente}`);
        //Logica mezclada en una sola clase
    }

    enviarMail(cliente, mensaje){
        console.log(`Enviando correo a ${cliente}: ${mensaje}`);
    }
}

const tienda = new Tienda();
tienda.agregarProducto("Camisa");
tienda.registrarClientes("Ana");
tienda.venderProducto("Ana", "Camisa");
tienda.enviarMail("Ana", "Gracias por su compra");