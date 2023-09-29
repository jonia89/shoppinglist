export default function Clearchecked(props) {
  return (
    <div>
      <button
        onDoubleClick={props.clearChecked}
        className="btn btn-danger btn-m m-2"
      >
        Poista valmiit tuplaklikkaamalla
      </button>
    </div>
  );
}
