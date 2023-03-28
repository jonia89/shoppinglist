import React from "react";

const Left = () => {
  const textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftToGo = () => {
    if (this.props.items.length === 0 && this.props.checked.length > 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (this.props.items.length === 1)
      return (
        "Vielä " +
        this.props.items.length +
        " \ntuote jäljellä"
      );
    else if (this.props.items.length > 1)
      return (
        "Vielä " + this.props.items.length + " \ntuotetta jäljellä"
      );
      else if (this.props.items.length + this.props.checked.length === 0)
      return ("Siirry muokkaamaan listaa")
    else if (this.props.items.length < 0)
      return "Nyt on jotain pahasti pielessä";
  };

  
    return (
      <div>
        <span style={textStyle} className="badge badge-primary m-5">
          {leftToGo()}
        </span>
      </div>
    );
  }
  export default Left
