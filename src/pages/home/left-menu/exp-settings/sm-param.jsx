import { useRef } from "react";

const SmoothingParam = (props) => {
  const paramRef = useRef();

  function paramHandler(event) {
    let newParam = [{ id: event.target.id, value: event.target.value }];
    props.onParamUpdate(newParam);
  }

  return (
    <div className={props.className ? props.className : ""}>
      <div className="d-flex flex-row mb-2">
        <label
          htmlFor={`${props.title}${props.type}`}
          className="form-label"
          style={{ minWidth: "60px" }}
        >
          {props.type}
        </label>
        <div className="col-3 col-lg-5">
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
              style={{ width: "80px" }}
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
              style={{ width: "80px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SmoothingParam;
