const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".after");
const container = document.querySelector(".container");

const move = (e) => {
  slider.style.left = `${e.layerX}px`;
  before.style.width = `${e.layerX}px`;
};

container.addEventListener("mousemove", move);
