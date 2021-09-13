// Clase para la manipulación de produtos

class producto {
    constructor(nombre, codigo, precio) {
        this.nombre = nombre
        this.codigo = codigo
        this.precio = precio
    }

    nombreProducto() {
        return this.nombre
    }

    codigoProducto() {
        return this.codigo
    }

    precioProducto() {
        return this.precio
    }
}


// Ingreso productos
let televisor = new producto("televisor", "0001", 10000)
let computadora = new producto("computadora", "0002", 50000)
let aire = new producto("aire acondicionado", "0003", 70000)


//Leo datos ingresados

let leoDatos = function () {
    let codigoIngresado = document.getElementById("codigo").value
    let metodoDePago = document.getElementById("metodoPago").value
    let cuotasIngresadas = document.getElementById("cuotas").value

    // Muestro los valores ingresados mediante evento de click

    let formulario = document.getElementById("diseñoFormulario")

    let parrafo = document.createElement("p")

    parrafo.innerHTML = `El codigo del producto es ${codigoIngresado} pagando con ${metodoDePago} a ${cuotasIngresadas} cuotas`

    formulario.appendChild(parrafo)
}

botonResumen = document.getElementById("botonResumen")
botonResumen.addEventListener("click",leoDatos)














