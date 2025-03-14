/* 
Un sistema necesita verificar si un usuario tiene acceso a un panel de administracion.
Para esto, se deben cumplir las siguientes condiciones:

El usuario debe estar registrado.
El usuario debe tener permisos de administrador.
La cuenta del usuario no debe estar suspendida.
*/

let IsRegistered = true;
let IsAdmin = true;
let IsSuspended = false;

if(IsRegistered){
    console.log("El usuario esta registrado");
    if(IsAdmin){
        console.log("El usuario tiene permisos de administrador");
        if(!IsSuspended){
            console.log("Acceso permitido al panel de administracion");
        } else {
            console.log("El usuario esta suspendido, acceso denegado");
        }
    } else {
        console.log("El usuario no tiene permisos de Administrador.");
    }
} else {
    console.log("El usuario no esta registrado");
}