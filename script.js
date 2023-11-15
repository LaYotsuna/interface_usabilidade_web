"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navbarHeight = document.querySelector(".navbar").offsetHeight;
  document.querySelector(".hero").style.paddingTop = navbarHeight + "px";
});

document.getElementById("exploreButton").addEventListener("click", function () {
  document.getElementById("interface").scrollIntoView();
});
