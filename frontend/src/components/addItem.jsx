import React, { setState, useState } from "react";

const New = () => {
  let [items, newItem] = useState([]);
  const barStyle = {
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    background: "gray",
  };
  const buttonStyle = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "yellow",
    color: "green",
  };

  const addItem = (item) => {
    if (this.inputElement.value !== "" && this.inputElement.value.length > 2) {
      newItem =
        this.inputElement.value.charAt(0).toUpperCase() +
        this.inputElement.value.slice(1);
      items += newItem;
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

  return (
    <div className="New">
      <form style={barStyle} onSubmit={addItem()}>
        <input
          ref={(item) => (this.inputElement = item)}
          className="'New-item"
          placeholder="Kirjoita tuote"
          type="text"
          onSubmit={() => setState()}
        />
        <button
          style={buttonStyle}
          type="submit"
          //onClick={(this.setState = () => this.state)}
        >
          Lisää
        </button>
      </form>
    </div>
  );
};

export default New;
