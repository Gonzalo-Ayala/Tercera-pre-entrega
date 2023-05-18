document.addEventListener("DOMContentLoaded", cargarPagina)

function cargarPagina() {

  "uses strict"

  let productos = [

    { id: 0, nombre: "remeras", precio: 1000 },
    { id: 1, nombre: "buzos", precio: 2000 },
    { id: 2, nombre: "pantalones", precio: 3000 }
  ];

  let carrito = JSON.parse(localStorage.getItem("micarrito")) || []

  let cartelera = document.getElementById("cartelera")
  cartelera.innerHTML += `<button class="btn_vaciar"> Vaciar Carrito </button>`

  let cart = document.getElementById("ver_carrito")
  cart.innerHTML += `<button class="btn_ver"> Ver Carrito </button>`



  for (let produc of productos) {

    cartelera.innerHTML += `<h2> ${produc.nombre}</h2>
                            <p> $${produc.precio} </p>
                            <button class="btn_agregar" id=${produc.id} > Agregar </button> 
                            <button class="btn_eliminar" id=${produc.id} > Eliminar </button> 
                            `

  }



  let agregar_productos = document.querySelectorAll(".btn_agregar");
  for (let prod of agregar_productos) {
    prod.addEventListener("click", function () {

      event.preventDefault()
      id = event.target.id
      agregrar_carrito(id)
      actualizar_carrito()

    }

    )
  }

  let elimino_productos = document.querySelectorAll(".btn_eliminar");
  for (let prod of elimino_productos) {
    prod.addEventListener("click", function () {

      event.preventDefault()
      id = event.target.id
      eliminar_carrito(id)
      actualizar_carrito()

    }

    )
  }

  document.querySelector(".btn_vaciar").addEventListener("click", function () {

    event.preventDefault()

    carrito = []
    actualizar_carrito()

  })

  document.querySelector(".btn_ver").addEventListener("click", function () {

    event.preventDefault()

    if (carrito.length > 0) {

      actualizar_carrito()

    } else {

      document.getElementById("ver_carrito").innerHTML = `<p> El carrito esta vacio </p>`

    }

  })



  function agregrar_carrito(id) {

    carrito.push(

      { id: productos[id].id, nombre: productos[id].nombre, precio: productos[id].precio, stock: productos[id].stock }

    )

  }

  function eliminar_carrito(id) {

    let i = 0

    while (i < carrito.length) {

      if (carrito[i].id == id) {

        carrito.splice(i, 1)
        i = carrito.length

      } else {

        i = i + 1

      }

    }
  }




  function actualizar_carrito() {

    let total = 0

    let remeras = 0

    let buzos = 0

    let pantalones = 0


    let ver_carrito = document.getElementById("ver_carrito")

    ver_carrito.innerHTML = ""

    if (carrito.length > 0) {

      for (let boton of carrito) {


        if (boton.nombre == "remeras") {

          remeras += 1

        }

        else if (boton.nombre == "buzos") {

          buzos += 1
        } else {

          pantalones += 1

        }

        total += boton.precio

      }

      ver_carrito.innerHTML +=

        `
      <ul>

         <li> Remeras: ${remeras} </li>
         <li> Buzos: ${buzos} </li>
         <li> Pantalones: ${pantalones} </li>

      <ul/>

     `

      ver_carrito.innerHTML += `<p> El total a pagar es: </p> <input id=preciototal </p> 
                                 <button type="submit" id="comprar"> Comprar </button>`
      document.getElementById("preciototal").value = ` $${total}`

    }

    local()

  }

  const local = function () {

    localStorage.setItem("micarrito", JSON.stringify(carrito))

  }


}





