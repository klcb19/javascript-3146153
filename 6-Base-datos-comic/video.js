//para identificar los items del item e  id selecionado y añadirle sus propiedades 
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const container = document.querySelector(".container")

// para comprobar su funcionalidad en la consola 
console.log("Te encuentras en el capiluto", id)

/* buscar en base de datos */
const capitulo = comic.capitulos.find(cap => cap.id === id)

const video = document.querySelector("#video");
const playVideo = document.querySelector("#play-video");
const stopVideo = document.querySelector("#stop-video");
const boton = document.querySelector("#boton2")

// para funcionalidad del video 
boton.href = `./capitulo.html?id=${id}`
function reproducirVideo() {
    video.play();
}
playVideo.addEventListener("click", reproducirVideo);

function pausarVideo() {
    video.pause();
}
stopVideo.addEventListener("click", pausarVideo);
