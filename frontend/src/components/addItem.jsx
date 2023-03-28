import { items } from "../App";

const addItem = (item) => {
  if (this.inputElement.value !== "" && this.inputElement.value.length > 2) {
    const newItem =
      this.inputElement.value.charAt(0).toUpperCase() +
      this.inputElement.value.slice(1);
    items.push(newItem);
    items.sort((a, b) => a - b);
    this.inputElement.value = "";
    console.log(items);
    item.preventDefault();
    return items;
  } else if (
    this.inputElement.value.length < 3 &&
    this.inputElement.value.length > 0
  ) {
    return alert("Eipä taida olla tollaista tuotetta");
  } else {
    if (this.inputElement.value === "");
    return alert("Tuotekenttä on tyhjä! Syötä tuote");
  }
};
export default addItem;
