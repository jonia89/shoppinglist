import Checkbox from "@mui/material/Checkbox";
import ListItem from "./ListItem";

export default function ItemList(props) {
  const listStyle = {
    fontSize: "25px",
    margin: "30px",
    display: "flex",
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
        </div>
      );
  };
  console.log(props.items);
  return (
    <div>
      {props.items.map((item) => (
        <div>
          <ListItem key={props.items.id} items={item} />
          <Checkbox defaultChecked={false} color="success" />
        </div>
      ))}
    </div>
  );
}
