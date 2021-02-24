"use strict";

const background = document.querySelector("body");
const button = document.querySelector("button");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const changeBackgroundColor = function () {
  background.style.backgroundColor = `rgb(${getRndInteger(
    0,
    255
  )},${getRndInteger(0, 255)},${getRndInteger(0, 255)})`;
};

button.addEventListener("click", changeBackgroundColor);
