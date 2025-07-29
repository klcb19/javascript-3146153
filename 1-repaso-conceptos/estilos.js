let Img = document.querySelector(".img");
let butt1 = document.querySelector("#boton1")
let butt2 = document.querySelector("#boton2")
let butt3  = document.querySelector("#boton3")
 
Img.addEventListener("click"  , () => {
    Img.style.filter = "grayscale(100%)";

});

butt1.addEventListener("click"  , () => {
    Img.style.filter = "grayscale(100%)";

});

butt2.addEventListener("click"  , () => {
    Img.style.filter = "blur(2px)";

});


