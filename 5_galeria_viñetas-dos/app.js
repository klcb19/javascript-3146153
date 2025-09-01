
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;
const sonidobutton = document.querySelector(".sonido")
const sonidobutton2 = document.querySelector(".sonido2")
const sonidobutton3 = document.querySelector(".sonido3")
const audioM = document.querySelector("#audio-1-mario")
const audioNatu = document.querySelector("#audio-1-arbol")
const audioHielo = document.querySelector("#audio-1-hielo")

/* console.log(monedas, corazon, contadorMonedas, contadorCorazones); */

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar");
        totalMonedas++
        contadorMonedas.textContent = totalMonedas

    })

})

corazones.forEach(function (corazon) {

    corazon.addEventListener("click", function () {
        corazon.classList.add("saltar");
        totalCorazones++;
        contadorCorazones.textContent = totalCorazones;
    })
})



///Galeria

const escenas = document.querySelectorAll('.escena')
const btAnterior = document.querySelector('.anterior')
const btSiguiente = document.querySelector('.siguiente')
const miniaturas = document.querySelectorAll('.miniaturas img')
let indice = 0

//console.log(escenas)
//console.log(escenas[1])

function mostrarEscena(i) {
    // console.log(escenas[i])
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa");
        
    }
    escenas[i].classList.add("activa")

    indice = i
}

//boton siguiente
btSiguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice >= escenas.length){
        indice = 0 //para que vuelva
    }
    mostrarEscena(indice)
})

//boton anterior
btAnterior.addEventListener("click", function(){
    indice = indice - 1
    
    if(indice < 0){
        indice = escenas.length - 1
    }
    mostrarEscena(indice)
})

miniaturas.forEach ((miniatura, i) => {
      miniatura.addEventListener("click", function (){
        mostrarEscena(i)
      })
});

sonidobutton.addEventListener('click', SonidoDeFondo)

function SonidoDeFondo(){
    if (audioM.paused) {

        audioM.play()
    } else {
        audioM.pause()
    }
}
sonidobutton2.addEventListener('click', SonidoDeFondo2)

function SonidoDeFondo2(){
    if (audioNatu.paused) {

        audioNatu.play()
    } else {
        audioNatu.pause()
    }
}
sonidobutton3.addEventListener('click', SonidoDeFondo3)

function SonidoDeFondo3(){
    if (audioHielo.paused) {

        audioHielo.play()
    } else {
        audioHielo.pause()
    }
}