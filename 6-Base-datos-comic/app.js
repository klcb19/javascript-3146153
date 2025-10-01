// para llamar informacion de HTML 
const tituloComic = document.querySelector(".titulo-comic")
const descripcionComic = document.querySelector(".descripcion-comic")
const imgComic = document.querySelector(".img-comic")
const listaCaps = document.querySelector(".lista-caps")

//para llamar informacion de base de datos 
tituloComic.textContent = comic.nombreComic
descripcionComic.textContent = comic.descripcion 
imgComic.src=comic.bgBanner

//para organizar los capitulos  y para redireccionar a la pagina del capitulo 
comic.capitulos.forEach(cap => {
    const div = document.createElement("div")
    div.classList.add("card-miniatura")
    div.innerHTML = `
    <a href="./capitulo.html?id=${cap.id}">
        <img src="${cap.imgPortada}" data-index="0" alt="Miniatura 1">
        <p>${cap.nombreCap}</p>
    </a>
    `
    listaCaps.appendChild(div)
})