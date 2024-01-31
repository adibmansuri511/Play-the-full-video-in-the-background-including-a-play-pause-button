let video = document.querySelector("#myVideo");
let btn = document.querySelector("#myBtn");

function playPauseFunc() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
