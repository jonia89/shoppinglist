import "../App.css";
import Back from "../components/toList";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";

export default function Addpage(props) {
  const clearStyle = {
    display: "flex",
    direction: "row",
  };

  return (
    <div>
      <Back />
      <New items={props.items} checked={props.checked} />
      <Manage items={props.items} checked={props.checked} />
      <Counter items={props.items} checked={props.checked} />
      <div style={clearStyle}>
        <Clearchecked items={props.items} checked={props.checked} />
        <Clear items={props.items} checked={props.checked} />
      </div>
      <Icon />
    </div>
  );
}
