import { makeElement, bodyRemove } from "./helpers";

export default function basic() {
  makeElement("div", "#content", "header", "");
  makeElement("div", "#content", "main", "");
  makeElement("div", "#content", "footer", "");

  // header elements
  makeElement("div", ".header", "logo", "");
  makeElement("div", ".header", "headerRight", "");
  makeElement("div", ".headerRight", "home", "Home");
  makeElement("div", ".headerRight", "menu", "Menu");
  makeElement("div", ".headerRight", "contact", "Contact");
  makeElement("div", ".headerRight", "reservations", "Reservations");

  // footer elements
  makeElement("div", ".footer", "author", "Powered by KRISSC84C");
}
