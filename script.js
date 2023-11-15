"use strict";

/* Manter hero abaixo da navbar */
document.addEventListener("DOMContentLoaded", function () {
  var navbarHeight = document.querySelector(".navbar").offsetHeight;
  document.querySelector(".hero").style.paddingTop = navbarHeight + "px";
});

/* Linkar o botão de explorar */
document.getElementById("exploreButton").addEventListener("click", function () {
  document.getElementById("interface").scrollIntoView();
});

/* Slides da Interface */
const slides = {
  slide1: [
    document.querySelector(".interface-img"),
    document.querySelector(".interface-texto"),
  ],
  slide2: [
    document.querySelector(".usabilidade-img"),
    document.querySelector(".usabilidade-texto"),
  ],
  slide3: [
    document.querySelector(".responsividade-img"),
    document.querySelector(".responsividade-texto"),
  ],
};

const setaAnterior = document.querySelector(".icone.anterior");
const setaProximo = document.querySelector(".icone.proximo");
const setas = [setaAnterior, setaProximo];

function selecionarSeta() {
  setas.forEach((seta) => {
    seta.addEventListener("click", () => {
      if (seta === setas[0]) {
        alert("Você pressionou a seta anterior");
      } else {
        alert("Você pressionou a seta próxima");
      }
    });
  });
}

const sliders = document.querySelectorAll(".slide");

function sliderDots() {
  sliders.forEach((slide) => {
    slide.addEventListener("click", () => {
      if (slide === sliders[0]) {
        alert("Você pressionou o slider 1");
      } else if (slide === sliders[1]) {
        alert("Você pressionou o slider 2");
      } else {
        alert("Você pressionou o slider 3");
      }
    });
  });
}

selecionarSeta();
sliderDots();
