/* 2. captura de variables */
const pantalla = document.querySelector("#img")
const btn1 = document.querySelector("#boton1")
const btn2 = document.querySelector("#boton2")
const btn3 = document.querySelector("#boton3")

/* 2. funciones */
function blancoynegro () {
    console.log("imagen modificada")
    pantalla.style.filter = "grayscale(100%)"
/*     btn1.style.background = "pink"
    btn1.style.color = "white"
    btn1.style.height = "200px"
    btn1.style.borderRadius = "50%" */ 
}
function desenfocar () {
    pantalla.style.filter = "blur(5px)"
}

function rotar () {
    pantalla.style.transform = "rotate(25deg) scale(1.5)"
}
 
/*3 eventos */

btn1.addEventListener("click", blancoynegro)

btn2.addEventListener("click", desenfocar)

btn3.addEventListener("click", rotar)