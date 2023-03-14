const keys = document.querySelectorAll(".drumset__tile");

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    let audioDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    audioDiv.classList.add("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);