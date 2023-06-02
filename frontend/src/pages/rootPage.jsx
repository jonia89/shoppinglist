import "../App.css";
import Back from "../components/toList";
import Counter from "../components/counter";
import Icon from "../components/Icon";
import Add from "../components/toAdd";

export default function Rootpage() {
  const rowStyle = {
    display: "flex",
    direction: "row",
  };

  return (
    <div>
      <Counter />
      <div style={rowStyle}>
        <Back />
        <Add />
      </div>
      <Icon />
    </div>
  );
}
