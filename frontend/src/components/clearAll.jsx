import { items, checked } from "../App";

const clearAll = () => {
    console.log("Tyhjentää listan");
    console.log(items, checked);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (items.length > 0) {
        items.pop();
        while (checked.length > 0) {
          checked.pop();
        }
      }
      if (items.length === 0 && checked.length === 0) {
        console.log(items, checked);
        return alert("Lista tyhjennetty");
      } else {
        return items && checked;
      }
    }
  };
 export default clearAll