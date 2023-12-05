import "../App.css";
import Add from "../components/toAdd";
import ItemList from "../components/ItemList";
import ItemsLeft from "../components/ItemsLeft";
import Icon from "../components/Icon";

export default function Listpage(props) {
  return (
    <div>
      <Add />
      <ItemsLeft items={props.items} />
      <ItemList items={props.items} />
      <Icon />
    </div>
  );
}
