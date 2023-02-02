import { makeElement, bodyRemove } from "./helpers";

export default function contact() {
// make one parent element that will be stylize
  makeElement("div", ".main", "contactDiv", "");
  makeElement("div", ".contactDiv", "info", "Restaurant Name: Tastes Better");
  makeElement("div", ".contactDiv", "info", "Address: Mordor Street 123 ,Warsaw,  Poland");
  makeElement("div", ".contactDiv", "info", "Phone: (+48) 123-456-123");
  makeElement("div", ".contactDiv", "info", "Email: info@tastesbetter.com");
  makeElement("div", ".contactDiv", "info", "Hours: Mon-Fri: 11am-9pm, Sat-Sun: 9am-11pm");
  makeElement("div", ".contactDiv", "info", "Social: @tastesbetter (Instagram, Facebook, Twitter)");
}
