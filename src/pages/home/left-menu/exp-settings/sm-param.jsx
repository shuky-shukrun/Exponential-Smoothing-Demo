import { useRef } from "react";

const SmoothingParam = (props) => {
  const paramRef = useRef();

  function paramHandler(event) {
    // TODO: implement logic here
  }

  return (
    <div className={props.className ? props.className : ""}>
      <div className="row">
        <label
          htmlFor={`${props.title}${props.type}`}
          className="col-sm-2 col-form-label"
        >
          {props.type}
        </label>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control form-control-sm"
            id={`${props.title}${props.type}`}
            ref={paramRef}
            onChange={paramHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SmoothingParam;
