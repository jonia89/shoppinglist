import "../App.css";
import Back from "../components/toList";
import Manage from "../components/manage";
import Counter from "../components/counter";
import New from "../components/addItem";
import Icon from "../components/Icon";
import Clear from "../components/clear";
import Clearchecked from "../components/clearChecked";

export default function Addpage() {
  const clearStyle = {
    display: "flex",
    direction: "row",
  };

  return (
    <div>
      <Back />
      <New />
      <Manage />
      <Counter />
      <div style={clearStyle}>
        <Clearchecked />
        <Clear />
      </div>
      <Icon />
    </div>
  );
}
