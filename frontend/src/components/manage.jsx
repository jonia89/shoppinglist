export default function Manage(props) {
  const itemsStyle = {
    fontSize: "25px",
    margin: "10px",
    display: "flex",
  };
  const checkedStyle = {
    fontSize: "25px",
    margin: "10px",
    display: "flex",
    color: "green",
  };

  const renderItems = () => {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item}>
            {item}
            <button
              onClick={props.deleteItem}
              className="btn btn-danger btn-sm m-2"
            >
              Poista
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const renderChecked = () => {
    <ul>
      {props.checked.map((item) => (
        <li key={item}>
          {item}
          <button
            onClick={props.deleteItem}
            className="btn btn-danger btn-sm m-2"
          >
            Poista
          </button>
        </li>
      ))}
    </ul>;
  };

  return (
    <div>
      <div className="manage-items-List" style={itemsStyle}>
        <span>{renderItems}</span>
      </div>
      <div className="manage-checked-list" style={checkedStyle}>
        <span>{renderChecked}</span>
      </div>
    </div>
  );
}
