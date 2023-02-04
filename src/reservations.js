import { makeElement, bodyRemove } from "./helpers";
import menu, * as menudish from "./menu";

export default function reservations() {
// make one parent element that will be stylize
  makeElement("div", ".main", "reservationsDiv", "");

  // make div for all form element
  makeElement("div", ".reservationsDiv", "middleContainer", "");

  // setting form element
  makeElement("form", ".middleContainer", "", "");
  // document.querySelector("form").setAttribute("action", "#");
  // document.querySelector("form").setAttribute("method", "get");
  makeElement("ul", "form");

  // Input field for first name
  makeInput("First Name", "name", "text", "name", "true");

  // Input field for last name
  makeInput("Second Name", "surname", "text", "surname", "true");

  // Input field for e-mail
  makeInput("E-mail", "email", "email", "email", "true");

  // Input field for tel
  makeInput("Phone Number", "tel", "tel", "tel", "true");

  // Input field for date
  makeInput("Date", "date", "date", "date", "true");
  const date = new Date();
  // don't let the date being in the past
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  const today = `${year}-${month}-${day}`;
  document.getElementById("date").value = today;
  document.getElementById("date").min = today;

  // Input field for tel
  makeInput("Hour", "time", "time", "time", "true");
  document.getElementById("time").min = "11:00";
  document.getElementById("time").max = "20:00";
  document.getElementById("time").step = "1800";

  // Input field for dish
  makeInput("Reserve your dish-if you want", "food", "text", "food", "false");
  document.querySelector(".inputGroup:last-of-type>li>input").setAttribute("list", "choices");

  // add feature that a client can tell what will order
  makeElement("datalist", ".inputGroup:last-of-type>li");
  document.querySelector("datalist").setAttribute("id", "choices");

  for (let index = 0; index < 9; index++) {
    makeElement("option", "datalist");
    document.querySelector("option:last-of-type").setAttribute("value", menudish.dishes[index]);
  }

  // add submit button
  makeElement("button", "form", "button", "Make Reservation");
  // document.querySelector("form>button").setAttribute("type", "submit");
  document.querySelector("form>button").setAttribute("id", "button");
  // document.querySelector("form>button").setAttribute("disabled", "true");
  document.querySelector("form>button").addEventListener("click", () => {
    bodyRemove();
    reservations();
  });
}

function makeInput(labelText, inputFor, inputType, inputAttribute, requiredType) {
  makeElement("div", "ul", "inputGroup");
  // Input field for last name
  makeElement("li", ".inputGroup:last-of-type");
  makeElement("label", ".inputGroup:last-of-type > li", "", labelText);
  makeElement("input", ".inputGroup:last-of-type > li");
  document.querySelector(".inputGroup:last-of-type > li > label").setAttribute("for", inputFor);
  document.querySelector(".inputGroup:last-of-type > li > input").setAttribute("type", inputType);
  document.querySelector(".inputGroup:last-of-type > li > input").setAttribute("id", inputAttribute);
  document.querySelector(".inputGroup:last-of-type > li > input").setAttribute("name", inputAttribute);
  document.querySelector(".inputGroup:last-of-type > li > input").setAttribute("required", requiredType);
}
