"use strict";

import { someFunction } from "./module.js";

someFunction("This is a module function");

document.addEventListener("DOMContentLoaded", function () {
  var navbarHeight = document.querySelector(".navbar").offsetHeight;
  document.querySelector(".hero").style.paddingTop = navbarHeight + "px";
});
