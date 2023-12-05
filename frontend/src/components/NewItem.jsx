import { useState } from "react";

export default function NewItem(props) {
  const [enteredItem, setEnteredItem] = useState("");

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
  const itemChangeHandler = (event) => {
    setEnteredItem(
      event.target.value.trim().charAt(0).toUpperCase() +
        event.target.value.trim().slice(1)
    );
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredItem.length > 2) {
      const newItem = {
        item: enteredItem,
        checked: false,
        id: Math.random().toString(),
      };
      props.addItemHandler(newItem);
      setEnteredItem("");
    }
  };

  const cancelHandler = (event) => {
    setEnteredItem("");
  };
 
  return (
    <div className="New">
      <form style={barStyle} onSubmit={submitHandler}>
        <input
          className="'New-item"
          placeholder="Kirjoita tuote"
          type="text"
          value={enteredItem}
          onChange={itemChangeHandler}
        />
        <button style={buttonStyle} type="submit">
          Add
        </button>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </form>
    </div>
  );
}
