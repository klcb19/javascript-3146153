//para identificar los items del item e  id selecionado y añadirle sus propiedades 
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const container = document.querySelector(".container")

console.log("Te encuentras en el capiluto", id)

/* buscar en base de datos */
const capitulo = comic.capitulos.find(cap => cap.id === id)

console.log(comic.capitulos[0].nombreCap)

/* mostrar la informacion en el capitulo */
container.innerHTML = `
   <section class="section3">
        <div class="general">
         <div class="boton11">
                 <a id="boto2" href="./comic.html">X</a>
                </div>
            <div class="imagen1">
                <img src="${capitulo.imgPortada}" alt="">
                <p>${capitulo.nombreCap}</p>
                <div class="boton1">
                    <a id="boton" href="./video.html?id=${capitulo.id}">>Reproducir</a>
                </div>
            </div>
            <div class="general2">
                <p>2025 3 Episodios</p>
                <div class="categoria">
                    <p class="parra1">+18</p>
                    <p>Violencia,suspenso</p>
                </div>
                <p>${capitulo.descripcion}</p>
            </div>
        </div>
        <p class="Episodios1">Episodios ></p>
        <div class="miniaturas">
        <a class="cuadro" href="./capitulo.html?id=${comic.capitulos[0].id}">
          <div >
              <img src="${comic.capitulos[0].imgPortada}" alt="">
              <p>${comic.capitulos[0].nombreCap}</p>
          </div>
        </a>
        <a class="cuadro" href="./capitulo.html?id=${comic.capitulos[1].id}">
         <div >
           <img src="${comic.capitulos[1].imgPortada}" alt="">
           <p>${comic.capitulos[1].nombreCap}</p>
         </div>
        </a>
        <a class="cuadro" href="./capitulo.html?id=${comic.capitulos[2].id}">
         <div >
           <img src="${comic.capitulos[2].imgPortada}" alt="">
           <p>${comic.capitulos[2].nombreCap}</p>
         </div>
        </a>
      </div>
    </section>

  ` 