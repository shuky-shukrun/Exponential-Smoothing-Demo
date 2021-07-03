const SmoothingParam = (props) => {
  return (
    <div className={props.className ? props.className : ""}>
      <div className="row">
        <label htmlFor="simpleAlpha" className="col-sm-2 col-form-label">
          {props.type}
        </label>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control form-control-sm"
            id={`${props.title}${props.type}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SmoothingParam;
