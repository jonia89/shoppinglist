export default function Counter(props) {
  const textStyle = {
    fontSize: "25px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const countObjects = () => {
    const counted = props.items.length;
    return counted;
  };

  return (
    <div>
      <span style={textStyle} className="badge badge-primary m-5">
        {countObjects()}
      </span>
    </div>
  );
}
