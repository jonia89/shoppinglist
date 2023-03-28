import { useState } from "react";

const Countobjects = () => {
  const items = useState([]);
  const checked = useState([]);
  if (items.length + checked.length === 0) return "Ostoslista on tyhjä";
  else if (items.length + checked.length === 1)
    return "Ostoslistalla on " + (items.length + checked.length) + " tuote";
  return "Ostoslistalla on " + (items.length + checked.length) + " tuotetta";
};
export default Countobjects;
