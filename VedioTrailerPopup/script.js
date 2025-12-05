const btnEl = document.querySelector('.btn');
const trailerContainer = document.querySelector(".trailer-container");
const closeIcon = document.querySelector(".trailer-container img:last-of-type")
const video = document.querySelector("video")

btnEl.addEventListener("click", ()=> {
    trailerContainer.classList.remove("active");
    video.play();
});

closeIcon.addEventListener("click" , ()=> {
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
})