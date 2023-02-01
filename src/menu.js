import { makeElement, bodyRemove, addDish } from "./helpers";

export default function menu() {
  // make one parent element that will be stylize
  makeElement("div", ".main", "menuDiv", "");
  // add dishes with descriptions and photos
  addDish(".menuDiv", dishname1, dishDescription1);
  addDish(".menuDiv", dishname2, dishDescription2);
  addDish(".menuDiv", dishname3, dishDescription3);
  addDish(".menuDiv", dishname4, dishDescription4);
  addDish(".menuDiv", dishname5, dishDescription5);
  addDish(".menuDiv", dishname6, dishDescription6);
  addDish(".menuDiv", dishname7, dishDescription7);
  addDish(".menuDiv", dishname8, dishDescription8);
  addDish(".menuDiv", dishname9, dishDescription9);
  addDish(".menuDiv", dishname10, dishDescription10);
}

const dishname1 = "Coconut Curry Clams";
const dishDescription1 = "Clams cooked in a creamy coconut curry sauce.";
const dishname2 = "Siren's Song Scallops";
const dishDescription2 = "Seared scallops with a white wine and herb sauce.";
const dishname3 = "Sea Treasures Paella";
const dishDescription3 = "A classic Spanish paella featuring an assortment of seafood and shellfish.";
const dishname4 = "Spicy Tuna Tartare Tower";
const dishDescription4 = "A tower of spicy tuna tartare with avocado and nori.";
const dishname5 = "Mediterranean Octopus";
const dishDescription5 = "Grilled octopus with a lemon and olive oil marinade.";
const dishname6 = "Baja Fish Tacos";
const dishDescription6 = "Fish tacos with a Bajastyle salsa and chipotle aioli.";
const dishname7 = "Surf & Turf Ceviche";
const dishDescription7 = "A mixture of seafood and beef marinated in a citrus sauce and served with tortilla chips.";
const dishname8 = "Lobster Linguine";
const dishDescription8 = "Linguine with a creamy sauce featuring chunks of succulent lobster.";
const dishname9 = "Earl Grey Poached Halibut";
const dishDescription9 = "Halibut fillets poached in an Earl Grey tea broth.";
const dishname10 = "Shrimp & Grits a la Creole";
const dishDescription10 = "Shrimp and creamy grits with a Creole-style sauce featuring peppers, onions, and spices.";
