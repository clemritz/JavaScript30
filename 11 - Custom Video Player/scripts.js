const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const previousButton = player.querySelector("[data-skip-1]");
const nextButton = player.querySelector("[data-skip-2]");
const ranges = player.querySelector(".player__slider");

// Fonctions ici
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '<i class="fa-solid fa-play"></i>' : '<i class="fa-solid fa-pause"></i>';
  toggle.innerHTML = icon;
}

// OU
// let icon;
// if (this.paused) {
//   icon = '<i class="fa-solid fa-play"></i>';
// } else {
//   icon = '<i class="fa-solid fa-pause"></i>';
// }

function previous() {
  video.currentTime -= 10;
}

function next() {
  video.currentTime += 25;
}


// Événements ici
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
