import React from "react";

 const Clearchecked = () => {

  const clearChecked = () => {
    console.log("Poistaa jo ostetut");
    console.log(this.props.items, this.props.checked);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (this.props.checked.length > 0) {
        this.props.checked.pop();
      }
      if (this.props.checked.length === 0) {
        console.log(this.props.items, this.props.checked);
        return alert("Ostetut poistettu");
      } else {
        return this.props.items && this.props.checked;
      }
    }
  };

    return (
      <div>
        <button
          onDoubleClick={clearChecked()}
          className="btn btn-danger btn-m m-2"
        >
          Poista valmiit tuplaklikkaamalla
        </button>
      </div>
    );
  }

export default Clearchecked