import { useState } from "react";

const Lefttogo = () => {
  const items = useState([]);
  const checked = useState([]);
  if (items.length === 0 && checked.length > 0)
    return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
  else if (items.length === 1)
    return "Vielä " + items.length + " \ntuote jäljellä";
  else if (items.length > 1)
    return "Vielä " + items.length + " \ntuotetta jäljellä";
  else if (items.length + checked.length === 0)
    return "Siirry muokkaamaan listaa";
  else if (items.length < 0) return "Nyt on jotain pahasti pielessä";
};
export default Lefttogo;
