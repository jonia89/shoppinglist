import React from "react";

const Manage = () => {
 const listStyle = {
    fontSize: "25px",
    margin: "50px",
    display: "flex",
  };
const itemList = [...this.props.items + this.props.checked]
  const handleDelete = (item) => {
    console.log("Poistaa tuotteen", item);
    return this.props.itemList;
  };

    return (
      <div>
        <span style={listStyle}>
          <ul>
            {itemList.map((item) => (
              <li key={item}>
                {item}
                <button
                  onClick={handleDelete()}
                  className="btn btn-danger btn-sm m-2"
                >
                  Poista
                </button>
              </li>
            ))}
          </ul>
        </span>
      </div>
    );
  }

export default Manage