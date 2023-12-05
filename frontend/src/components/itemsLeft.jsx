export default function ItemsLeft(props) {
  const textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const itemsLeftCounter = () => {
    const counted = props.items.length;
    if (props.items.length === 0)
      return "Kaikki ostokset hoidettu, on aika suunnata kassalle";
    else if (props.items.length === 1)
      return "Vielä " + props.items.length + " \ntuote jäljellä";
    else if (props.items.length > 1)
      return "Vielä " + props.items.length + " \ntuotetta jäljellä";
    else if (props.items.length) return "Siirry muokkaamaan listaa";
    else if (props.items.length < 0) return "Nyt on jotain pahasti pielessä";
    return counted;
  };

  return (
    <div>
      <span style={textStyle} className="badge badge-primary m-5">
        {itemsLeftCounter()}
      </span>
    </div>
  );
}
