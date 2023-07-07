const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButton = player.querySelector("[data-skip]");
const ranges = player.querySelector(".player__slider");

// BUILD FUNCTIONS HERE
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Ajoutez cet événement au bouton de lecture/pause
toggle.addEventListener("click", togglePlay);
