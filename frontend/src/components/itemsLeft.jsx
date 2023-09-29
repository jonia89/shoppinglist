export default function Left(props) {
  const textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <span style={textStyle} className="badge badge-primary m-5">
        {props.itemsLeft}
      </span>
    </div>
  );
}
