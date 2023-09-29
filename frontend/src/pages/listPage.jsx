import "../App.css";
import Add from "../components/toAdd";
import List from "../components/list";
import Left from "../components/itemsLeft";
import Icon from "../components/Icon";

export default function Listpage(props) {
  return (
    <div>
      <Add />
      <Left items={props.items} checked={props.checked} />
      <List items={props.items} checked={props.checked} />
      <Icon />
    </div>
  );
}
