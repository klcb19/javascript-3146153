let kirbie = document.querySelector("#uno")
let kirb = document.querySelector("#dos")
let clock = document.querySelector("#cuatro")
let title = document.querySelector("#titulo")
let monoo = document.querySelector("#tres")
let contadorInter = document.querySelector('#contador-interacciones')
let totalinteraction = 0

kirbie.addEventListener('click', kirbyScale)
function kirbyScale() {
    kirbie.classList.add('escalar')
    totalinteraction++
    contadorInter.textContent = totalinteraction

    kirbie.removeEventListener('click', kirbyScale)
}


kirb.addEventListener('click', kirbyRotate)
function kirbyRotate() {
    kirb.classList.add('rotacion')
    totalinteraction++
    contadorInter.textContent = totalinteraction

    kirb.removeEventListener('click', kirbyRotate)
}

clock.addEventListener('click', relojrotar)
function relojrotar() {
    clock.classList.add('reloj')
    totalinteraction++
    contadorInter.textContent = totalinteraction

    clock.removeEventListener('click', relojrotar)
}


title.addEventListener('click', titulokirb)
function titulokirb() {
    title.classList.add('saltar')
    totalinteraction++
    contadorInter.textContent = totalinteraction

    title.removeEventListener('click', titulokirb)
}
monoo.addEventListener('click', kirbymono)
function kirbymono() {
    monoo.classList.add('mono')
    totalinteraction++
    contadorInter.textContent = totalinteraction

    monoo.removeEventListener('click', kirbyScale)
}
