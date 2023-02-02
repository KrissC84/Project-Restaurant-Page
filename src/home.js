import { makeElement, bodyRemove } from "./helpers";

export default function home() {
  const quote = "“The discovery of a new dish does more for the happiness of the human race than the discovery of a star.”";

  // main part elements
  makeElement("div", ".main", "mainHome", "");
  makeElement("div", ".mainHome", "mainLeft", "");
  makeElement("div", ".mainHome", "mainRight", "");
  makeElement("h3", ".mainRight", "quote", quote);
  makeElement("h1", ".mainRight", "quoteAuthor", "Jean Anthelme Brillat-Savarin");

  // mainLeft elements
  makeElement("div", ".mainLeft", "foto_1", "");
  makeElement("div", ".mainLeft", "foto_2", "");
  makeElement("div", ".mainLeft", "foto_3", "");
}
