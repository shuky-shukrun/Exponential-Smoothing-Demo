import { useRef } from "react";

const SmoothingParam = (props) => {
  const paramRef = useRef();

  function paramHandler(event) {
    let newParam = { id: event.target.id, value: event.target.value };
    props.onParamUpdate(newParam);
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
          {props.type !== "Season" && (
            <input
              type="number"
              className="form-control form-control-sm"
              id={`${props.title}${props.type}`}
              ref={paramRef}
              onChange={paramHandler}
              value={props.paramsData[`${props.title}${props.type}`]}
              step={0.01}
              min={0.0}
              max={1.0}
            />
          )}

          {props.type === "Season" && (
            <input
              type="number"
              className="form-control form-control-sm"
              id={`${props.title}${props.type}`}
              onChange={paramHandler}
              value={props.paramsData[`${props.title}${props.type}`]}
              step={1}
              min={0}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SmoothingParam;
