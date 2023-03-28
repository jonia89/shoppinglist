import React from "react";

  const New = () => {
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
      let newItem =
        this.inputElement.value.charAt(0).toUpperCase() +
        this.inputElement.value.slice(1);
      this.state.items.push(newItem);
      this.state.items.sort((a, b) => a - b);
      this.inputElement.value = "";
      console.log(this.state.items);
      item.preventDefault();
      return this.state.items;
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
  }

export default New