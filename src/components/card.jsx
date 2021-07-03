const Card = (props) => {
  return (
    <div
      className={`card ${props.className ? props.className : ""}`}
      style={props.style}
    >
      <div className="card-body" style={props.bodyStyle}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
