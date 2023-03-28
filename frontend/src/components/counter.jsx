import React from "react";

const Counter = () => {

  const textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
 
  const countObjects = () => {
    if (this.props.items.length + this.props.checked.length === 0)
      return "Ostoslista on tyhjä";
    else if (this.props.items.length + this.props.checked.length === 1)
      return (
        "Ostoslistalla on " +
        (this.props.items.length + this.props.checked.length) +
        " tuote"
      );
    return (
      "Ostoslistalla on " +
      (this.props.items.length + this.props.checked.length) +
      " tuotetta"
    );
  };
  
    return (
      <div>
        <span style={textStyle} className="badge badge-primary m-5">
          {countObjects()}
        </span>
      </div>
    );
  }

export default Counter