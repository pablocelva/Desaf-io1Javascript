const PRECIO = 400000

precioInicial = document.querySelector("#precio-inicial");
precioInicial.innerHTML = PRECIO

let cantidadItem = 0
cantidadItem = document.querySelector("#cantidad-item")

function add(){
    cuentaItems = Number(cantidadItem.innerHTML) + 1
    cantidadItem.innerHTML = cuentaItems
    actualizarPrecio()
    /*valorTotal = document.querySelector('#valor-total')
    valorTotal.innerHTML = PRECIO * cuentaItems*/
}

function restar(){
    cuentaItems = Number(cantidadItem.innerHTML) - 1
    cantidadItem.innerHTML = cuentaItems
    actualizarPrecio()
    /*valorTotal = document.querySelector('#valor-total')
    valorTotal.innerHTML = PRECIO * cuentaItems*/
}

function actualizarPrecio(){
    valorTotal = document.querySelector('#valor-total')
    valorTotal.innerHTML = PRECIO * cuentaItems
}

btnMas = document.querySelector("#btn-mas")
btnMas.addEventListener("click", add)

btnMenos = document.querySelector("#btn-menos")
btnMenos.addEventListener("click", restar)
