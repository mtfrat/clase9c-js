let mensajesArray = []


let form = document.getElementById('formularioContacto')

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let formValues = new FormData(e.target)
    let nuevoMensaje = {nombre: formValues.get("nombreUsuario"), mail: formValues.get("mailUsuario"), mensaje: formValues.get("mensajeUsuario")}
    form.reset()
    mensajesArray.push(nuevoMensaje)
    console.log(mensajesArray)
    localStorage.setItem("Mensaje", JSON.stringify(mensajesArray))
    
})

// // Elimino mensajes enviados

// let borroDatos = function () {
//     mensajesArray = []
// }

// let botonBorrar = document.getElementById('botonBorrar')
// botonBorrar.addEventListener("click",borroDatos)
// console.log(mensajesArray)


let mostrarMensajes = function () {
    // Muestro los valores ingresados mediante evento de click
    let divMensaje = document.createElement("div")
    divMensaje.className = 'divMensaje';
    for (mensaje of mensajesArray) {
        divMensaje.innerHTML +=     `
        <p> Nombre: ${mensaje.nombre} </p>
        <p> Mail: ${mensaje.mail} </p>
        <p> Mensaje: ${mensaje.mensaje} </p><br>
    `
    }
    contenido.appendChild(divMensaje)
}

let mensajesContacto = document.getElementById("contenido")
let botonMensajes = document.getElementById("mostrarMensajes")
botonMensajes.addEventListener("click",mostrarMensajes)