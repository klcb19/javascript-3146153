const video = document.querySelector("#video")
const PlayVideo = document.querySelector("#play-video")
const StopVideo = document.querySelector("#stop-video")
const PlaystopImg = document.querySelector("#play-stop-img1")
const Audio2 = document.querySelector("#audio-1-loronicol")
const PlaystopImg2 = document.querySelector("#play-stop-img2")
const Audio1 = document.querySelector("#audio-1-perro")



function ReproducirVideo() {
    video.play();

}
PlayVideo.addEventListener("click", ReproducirVideo);

function PausarVideo() {
    video.pause();

}
StopVideo.addEventListener("click", PausarVideo)



function toggleAudioUno() {

    if (Audio1.paused) {

        Audio1.play()
        PlaystopImg2.textContent = "stop"
    } else {
        Audio1.pause()
        PlaystopImg2.textContent = "play"
    }
}

PlaystopImg.addEventListener("click", toggleAudioDos);

function toggleAudioDos() {

    if (Audio2.paused) {

        Audio2.play()
        PlaystopImg.textContent = "stop"
    } else {
        Audio2.pause()
        PlaystopImg.textContent = "play"
    }
}

PlaystopImg2.addEventListener("click", toggleAudioDos);