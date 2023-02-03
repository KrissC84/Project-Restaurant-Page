import {
  makeElement, bodyRemove, addDish, addDrink,
} from "./helpers";

export default function menu() {
  // make one parent element that will be stylize
  makeElement("div", ".main", "menuDiv", "");
  makeElement("div", ".main", "menuDessertDiv", "");
  makeElement("div", ".main", "menuDrinkDiv", "");
  // add dishes with descriptions and photos
  makeElement("div", ".menuDiv", "h3Menu", "Main Dishes");
  addDish(".menuDiv", dishname1, dishDescription1, "dish");
  addDish(".menuDiv", dishname2, dishDescription2, "dish");
  addDish(".menuDiv", dishname3, dishDescription3, "dish");
  addDish(".menuDiv", dishname4, dishDescription4, "dish");
  addDish(".menuDiv", dishname5, dishDescription5, "dish");
  addDish(".menuDiv", dishname6, dishDescription6, "dish");
  addDish(".menuDiv", dishname7, dishDescription7, "dish");
  addDish(".menuDiv", dishname8, dishDescription8, "dish");
  addDish(".menuDiv", dishname9, dishDescription9, "dish");
  // addDish(".menuDiv", dishname10, dishDescription10, "dish");

  // add desserts
  makeElement("div", ".menuDessertDiv", "h3Menu", "Desserts");
  addDish(".menuDessertDiv", dessertName1, dessertDescription1, "dessert");
  addDish(".menuDessertDiv", dessertName2, dessertDescription2, "dessert");
  addDish(".menuDessertDiv", dessertName3, dessertDescription3, "dessert");
  addDish(".menuDessertDiv", dessertName4, dessertDescription4, "dessert");
  addDish(".menuDessertDiv", dessertName5, dessertDescription5, "dessert");
  addDish(".menuDessertDiv", dessertName6, dessertDescription6, "dessert");
  addDish(".menuDessertDiv", dessertName7, dessertDescription7, "dessert");
  addDish(".menuDessertDiv", dessertName8, dessertDescription8, "dessert");
  addDish(".menuDessertDiv", dessertName9, dessertDescription9, "dessert");
  // addDish(".menuDessertDiv", dessertName10, dessertDescription10, "dessert");

  // add drinks
  makeElement("div", ".menuDrinkDiv", "h3Menu", "Drinks & Sodas");
  addDish(".menuDrinkDiv", drinkName1, drinkDescr1, "drink");
  addDish(".menuDrinkDiv", drinkName2, drinkDescr2, "drink");
  addDish(".menuDrinkDiv", drinkName3, drinkDescr3, "drink");
  addDish(".menuDrinkDiv", drinkName4, drinkDescr4, "drink");
  addDish(".menuDrinkDiv", drinkName5, drinkDescr5, "drink");
  addDish(".menuDrinkDiv", drinkName6, drinkDescr6, "drink");
  addDish(".menuDrinkDiv", drinkName7, drinkDescr7, "drink");
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

const drinkName1 = "Classic Cocktails";
const drinkDescr1 = "Martini, Margarita, Manhattan, and more";
const drinkName2 = "Refreshing Beers";
const drinkDescr2 = "A selection of draft and bottled beers";
const drinkName3 = "Bubbly Beverages";
const drinkDescr3 = "Champagne, Prosecco, and Sparkling Wines";
const drinkName4 = "Intoxicating Wines";
const drinkDescr4 = "A variety of red and white wines by the glass or bottle";
const drinkName5 = "Fizzy Sodas";
const drinkDescr5 = "Coca-Cola, Sprite, and other popular sodas";
const drinkName6 = "Energizing Energy Drinks";
const drinkDescr6 = "Red Bull and other energy drinks";
const drinkName7 = "Healthy Hydrators";
const drinkDescr7 = "Water, Juice, and other non-alcoholic beverages.";

const dessertName1 = "Enchanted Éclair";
const dessertDescription1 = "A classic French éclair filled with a rich and creamy matcha custard";
const dessertName2 = "Bohemian Baked Alaska";
const dessertDescription2 = "A baked Alaska with layers of sponge cake, ice cream, meringue, and a berry compote";
const dessertName3 = "Golden Gingerbread Crème Brûlée";
const dessertDescription3 = "A crème brûlée with warm and spicy gingerbread flavors";
const dessertName4 = "Sapphire Sorbet";
const dessertDescription4 = "A refreshing blueberry and mint sorbet";
const dessertName5 = "Opulent Opera Cake";
const dessertDescription5 = "A layered cake with coffee-soaked sponge, chocolate ganache, and buttercream";
const dessertName6 = "Radiant Raspberry Roule";
const dessertDescription6 = "A swiss roll with a raspberry filling and dark chocolate ganache";
const dessertName7 = "Majestic Mango Mousse";
const dessertDescription7 = "A light and airy mango mousse with a crispy almond tuile";
const dessertName8 = "Spellbinding Strawberry Cheesecake";
const dessertDescription8 = "A Polish-style cheesecake with fresh strawberries";
const dessertName9 = "Heavenly Hazelnut Macaron";
const dessertDescription9 = "A French macaron filled with hazelnut buttercream";

const dishes = [dishname1,
  dishname2,
  dishname3,
  dishname4, dishname5, dishname6, dishname7, dishname8, dishname9];

export {
  dishes,
};
