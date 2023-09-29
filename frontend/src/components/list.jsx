import Checkbox from "@mui/material/Checkbox";
import React from "react";

export default function List(props) {
  const listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",
  };

  const renderItems = () => {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item}>
            {item}
            <Checkbox
              onChange={props.dropDown}
              defaultChecked={false}
              color="success"
              onClick={props.dropDown}
            />
          </li>
        ))}
      </ul>
    );
  };

  const renderChecked = () => {
    return (
      <ul>
        {props.checked.map((item) => (
          <li key={item}>
            {item}
            <Checkbox
              onChange={props.liftUp}
              defaultChecked={true}
              color="success"
              onClick={props.liftUp}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="items-list" style={listStyle}>
        {renderItems}
      </div>
      <div className="checked-list" style={listStyle}>
        {renderChecked}
      </div>
    </div>
  );
}
