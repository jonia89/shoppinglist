import { useState } from "react";

const Clearchecked = () => {
  const items = useState([]);
  const checked = useState([]);
  console.log("Poistaa jo ostetut");
  console.log(items, checked);
  const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
  if (areYouSure === "kyllä") {
    while (checked.length > 0) {
      checked.pop();
    }
    if (checked.length === 0) {
      console.log(items, checked);
      return alert("Ostetut poistettu");
    } else {
      return items && checked;
    }
  }
};
export default Clearchecked;
