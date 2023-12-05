import ListItem from "./ListItem";

export default function ManageItems(props) {
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

  const isChecked = () => {

  };

  const renderUnCheckedItems = () => {
    if (props.items.checked === false)
      return (
        <div>
          {props.items.map((item) => (
            <ListItem key={props.items.id} items={item} />
          ))}
        </div>
      );
  };
  const renderCheckedItems = () => {
    if (props.items.checked === true)
      return (
        <div>
          {props.items.map((item) => (
            <ListItem key={props.items.id} items={item} />
          ))}
          <div>
            <button className="btn btn-danger btn-sm m-2">Delete</button>
          </div>
        </div>
      );
  };

  console.log(props.items);

  return (
    <div>
      {props.items.map((item) => (
        <div>
          <ListItem key={props.items.id} items={item} />
          <button className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      ))}
    </div>
  );
}
