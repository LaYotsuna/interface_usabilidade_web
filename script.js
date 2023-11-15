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

/* Numeração do slide */
let slideCounter = 0;

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
      if (seta === setas[0] && slideCounter === 0) {
        return null;
      } else if (
        (seta === setas[0] && slideCounter === 1) ||
        (seta === setas[0] && slideCounter === 2)
      ) {
        slideCounter -= 1;
        voltarSlide(slideCounter);
      } else if (
        (seta === setas[1] && slideCounter === 0) ||
        (seta === setas[1] && slideCounter === 1)
      ) {
        slideCounter += 1;
        passarSlide(slideCounter);
      } else {
        return null;
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

function voltarSlide(num) {
  if (num === 1) {
    slides.slide1[0].classList.remove("oculto");
    slides.slide1[1].classList.remove("oculto");
    slides.slide1[0].classList.add("oculto");
    slides.slide1[1].classList.add("oculto");
    slides.slide2[0].classList.add("oculto");
    slides.slide2[1].classList.add("oculto");
  } else if (num === 2) {
    slides.slide1[0].classList.add("oculto");
    slides.slide1[1].classList.add("oculto");
    slides.slide2[0].classList.remove("oculto");
    slides.slide2[1].classList.remove("oculto");
    slides.slide3[0].classList.add("oculto");
    slides.slide3[1].classList.add("oculto");
  }
}

function passarSlide(num) {
  if (num === 0) {
    slides.slide2[0].classList.add("oculto");
    slides.slide2[1].classList.add("oculto");
    slides.slide3[0].classList.add("oculto");
    slides.slide3[1].classList.add("oculto");
  } else if (num === 1) {
    slides.slide1[0].classList.add("oculto");
    slides.slide1[1].classList.add("oculto");
    slides.slide2[0].classList.remove("oculto");
    slides.slide2[1].classList.remove("oculto");
    slides.slide3[0].classList.add("oculto");
    slides.slide3[1].classList.add("oculto");
  } else if (num === 2) {
    slides.slide1[0].classList.add("oculto");
    slides.slide1[1].classList.add("oculto");
    slides.slide2[0].classList.add("oculto");
    slides.slide2[1].classList.add("oculto");
    slides.slide3[0].classList.remove("oculto");
    slides.slide3[1].classList.remove("oculto");
  }
}

passarSlide(slideCounter);
selecionarSeta();
sliderDots();
