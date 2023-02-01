import { makeElement, bodyRemove } from "./helpers";

export default function home() {
  const quote = "“The discovery of a new dish does more for the happiness of the human race than the discovery of a star.”";
  //  Jean Anthelme Brillat-Savarin

  // main part elements
  makeElement("div", ".main", "mainLeft", "");
  makeElement("div", ".main", "mainRight", "");
  makeElement("h3", ".mainRight", "quote", quote);
  // mainLeft elements
  makeElement("div", ".mainLeft", "foto_1", "");
  makeElement("div", ".mainLeft", "foto_2", "");
  makeElement("div", ".mainLeft", "foto_3", "");
}
