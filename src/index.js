import "./style.css";

import basic from "./basic";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import { makeElement, bodyRemove } from "./helpers";

basic();
home();
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");
const reservationsBtn = document.querySelector(".reservations");

homeBtn.addEventListener("click", () => {
  bodyRemove();
  home();
});
menuBtn.addEventListener("click", () => {
  bodyRemove();
  const menuGridarot = document.querySelector(".main");
  menuGridarot.setAttribute("style", "flex-wrap:wrap");
  menu();
});
contactBtn.addEventListener("click", () => {
  bodyRemove();
  contact();
});
reservationsBtn.addEventListener("click", () => {
  bodyRemove();
  reservations();
});

console.log("calling from index.js");
