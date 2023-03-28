import React, { useState, setState } from "react";

const Left = () => {
  const [items, checked] = useState([])
  const textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftToGo = () => {
    if (items.length === 0 && checked.length > 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (items.length === 1)
      return (
        "Vielä " +
        items.length +
        " \ntuote jäljellä"
      );
    else if (items.length > 1)
      return (
        "Vielä " + items.length + " \ntuotetta jäljellä"
      );
      else if (items.length + checked.length === 0)
      return ("Siirry muokkaamaan listaa")
    else if (items.length < 0)
      return "Nyt on jotain pahasti pielessä";
  };

  
    return (
      <div>
        <span onChange={() => setState()} style={textStyle} className="badge badge-primary m-5">
          {leftToGo()}
        </span>
      </div>
    );
  }
  export default Left
