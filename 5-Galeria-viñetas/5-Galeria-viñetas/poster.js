let kirbie = document.querySelector("#uno")
let kirb = document.querySelector("#dos")
let clock = document.querySelector("#cuatro")
let title = document.querySelector("#titulo")
let monoo = document.querySelector("#tres")
let contadorInter = document.querySelector('#contador-interacciones')
let totalinteraction = 0
const sonidoIcon = document.querySelector("#sonido")
const Audio1 = document.querySelector("#audio-1-titu")
const Audio2 = document.querySelector("#audio-2-kirby")
const Audio3 = document.querySelector("#audio-3-reloj")
const Audio4 = document.querySelector("#audio-4-fondo")

kirbie.addEventListener('click', kirbyScale)
function kirbyScale() {
    kirbie.classList.add('escalar')
    totalinteraction++
    contadorInter.textContent = totalinteraction
    Audio2.play()
    kirbie.removeEventListener('click', kirbyScale)
}



kirb.addEventListener('click', kirbyRotate)
function kirbyRotate() {
    kirb.classList.add('rotacion')
    totalinteraction++
    contadorInter.textContent = totalinteraction
    Audio3.play()
    kirb.removeEventListener('click', kirbyRotate)
}

clock.addEventListener('click', relojrotar)
function relojrotar() {
    clock.classList.add('reloj')
    totalinteraction++
    contadorInter.textContent = totalinteraction
    Audio3.play()
    clock.removeEventListener('click', relojrotar)
}


title.addEventListener('click', titulokirb)
function titulokirb() {
    title.classList.add('saltar')
    totalinteraction++
    contadorInter.textContent = totalinteraction
    Audio1.play()
    title.removeEventListener('click', titulokirb)
}
monoo.addEventListener('click', kirbymono)
function kirbymono() {
    monoo.classList.add('mono')
    totalinteraction++
    contadorInter.textContent = totalinteraction
    Audio1.play()
    monoo.removeEventListener('click', kirbyScale)
}

sonidoIcon.addEventListener('click', SonidoDeFondo)

function SonidoDeFondo(){
    if (Audio4.paused) {

        Audio4.play()
    } else {
        Audio4.pause()
    }
}
//funcion siguiente galeria
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const escena1 = document.querySelector(".escena-1")
const escena2 = document.querySelector(".escena-2")
const escena3 = document.querySelector(".escena-3")
let i = 1

next.addEventListener("click", function () {
  if(i === 1){
    escena1. classList.add("d-none")
    escena2. classList.remove("d-none")
    i++
  }else if(i == 2){
    escena2.classList.add("d-none")
    escena3.classList.remove("d-none")
    i++

  }
})