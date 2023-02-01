// quickly create html element of given type and destination that will be added as the last one
function makeElement(elementType, parentElementSelector, cssClassName = "", textContent = "") {
  // creating element of given type

  const newElement = document.createElement(elementType);
  // add a class if there is one
  if (cssClassName !== "") {
    newElement.classList.add(cssClassName);
  }

  const parent = document.querySelector(parentElementSelector);

  newElement.textContent = textContent;
  // adding element to the DOM
  parent.appendChild(newElement);
}

function bodyRemove() {
  Array.from(document.querySelectorAll(".main *")).forEach((el) => { el.remove(); });
}

function addDish(parentDiv, name, description, imgUrl) {
  makeElement("div", parentDiv, "dish", name);
  makeElement("h4", ".dish:last-of-type", "description", description);
}

export { makeElement, bodyRemove, addDish };
