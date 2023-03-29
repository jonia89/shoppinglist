import React from "react";

const Clear = () => {
  const clearAll = () => {
    console.log("Tyhjentää listan");
    console.log(this.state.items, this.state.checked);
    const areYouSure = prompt("Oletko varma? (kirjoita kyllä vahvistaaksesi)");
    if (areYouSure === "kyllä") {
      while (this.state.items.length > 0) {
        this.props.items.pop();
        while (this.state.checked.length > 0) {
          this.props.checked.pop();
        }
      }
      if (this.state.items.length === 0 && this.state.checked.length === 0) {
        console.log(this.props.items, this.props.checked);
        return alert("Lista tyhjennetty");
      } else {
        return this.state.items && this.state.checked;
      }
    }
  };

  return (
    <div>
      <button onDoubleClick={clearAll()} className="btn btn-danger btn-m m-2">
        Tyhjennä tuplaklikkaamalla
      </button>
    </div>
  );
};

export default Clear;
