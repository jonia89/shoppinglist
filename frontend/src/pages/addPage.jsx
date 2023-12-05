import "../App.css";
import Back from "../components/toList";
import ManageItems from "../components/ManageItems";
import Counter from "../components/Counter";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";
import NewItem from "../components/NewItem";

export default function Addpage(props) {
  const clearStyle = {
    display: "flex",
    direction: "row",
  };

  return (
    <div>
      <Back />
      <NewItem items={props.items} addItemHandler={props.addItemHandler} />
      <Counter items={props.items} />
      <ManageItems items={props.items} />

      <div style={clearStyle}>
        <Clearchecked items={props.items} checked={props.checked} />
        <Clear items={props.items} checked={props.checked} />
      </div>
      <Icon />
    </div>
  );
}
