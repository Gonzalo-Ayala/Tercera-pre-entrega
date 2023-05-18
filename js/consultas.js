document.addEventListener("DOMContentLoaded", cargarPagina)

function cargarPagina() {

    "uses strict"

    document.getElementById("codigo").addEventListener("click", generarCodigo)
    document.getElementById("enviar").addEventListener("click", controlar)


    function generarCodigo() {

        event.preventDefault()

        document.getElementById("aviso").innerHTML = ""
        let numero = document.getElementById("mostrar")
        numero = numero.value
        let largo = numero.toString().length

        if (largo < 5) {
            let j = 0
            while (j < 5) {
                let x = Math.floor(Math.random() * 10)
                j = j + 1;
                document.getElementById("mostrar").value += x
            }
        }
    }

    function controlar() {

        let primero = document.getElementById("ingresar").value
        let segundo = document.getElementById("mostrar").value
        let div = document.getElementById("aviso")
        const parrafo = document.createElement("p")


        if (primero != segundo || primero == "" && segundo != "") {

                parrafo.textContent = "*el codigo ingresado es incorrecto";
                div.appendChild(parrafo)
                event.preventDefault(); 
                document.getElementById("mostrar").value = ""
                document.getElementById("ingresar").value = ""

        } else if (segundo == "") {
                div.innerHTML = "Por favor generar codigo"
                event.preventDefault();
           } 
        } 
       
}