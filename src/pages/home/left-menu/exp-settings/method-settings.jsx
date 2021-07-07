import SmoothingParam from "./sm-param";
import { useState } from "react";

import {
  SimpleExponentialSmoothing,
  HoltWintersSmoothing,
  HoltSmoothing,
} from "../../content/exponential-smoothing";

const MethodSettings = (props) => {
  const [isChecked, setChecked] = useState(true);

  function switchHandler() {
    props.onParamUpdate([{ id: `${props.title}Switch`, value: isChecked }]);
    setChecked(!isChecked);
  }

  function optimizeHandler(event) {
    const { graphData, paramsData } = props;

    switch (event.target.id) {
      case "OptSimpleBtn":
        const simpleExp = new SimpleExponentialSmoothing(graphData, 0.5);
        simpleExp.optimizeParameter(20);
        props.onParamUpdate([{ id: "SimpleAlpha", value: simpleExp.alpha }]);
        break;
      case "OptDoubleBtn":
        const doubleExp = new HoltSmoothing(graphData, 0.5, 0.5);
        doubleExp.optimizeParameters(20);
        props.onParamUpdate([
          { id: "DoubleAlpha", value: doubleExp.alpha },
          { id: "DoubleBeta", value: doubleExp.gamma },
        ]);
        break;
      case "OptTripleBtn":
        const tripleExp = new HoltWintersSmoothing(
          graphData,
          0.5,
          0.5,
          0.5,
          paramsData.TripleSeason,
          true
        );
        tripleExp.optimizeParameters(20);
        props.onParamUpdate([
          { id: "TripleAlpha", value: tripleExp.alpha },
          { id: "TripleBeta", value: tripleExp.gamma },
          { id: "TripleGama", value: tripleExp.delta },
        ]);
        break;
      default:
        break;
    }
  }

  return (
    // Switch
    <div className={props.className ? props.className : ""}>
      <div className="form-check form-switch mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id={`${props.title}Switch`}
          checked={isChecked}
          onChange={switchHandler}
        />
        <label className="form-check-label" htmlFor={`${props.title}Switch`}>
          {props.title} Exponential Smoothing
        </label>
      </div>
      {/* Smoothing params */}
      <div id={`${props.title}Params`} hidden={!isChecked}>
        {props.smoothingParams.map((param) => (
          <SmoothingParam
            title={props.title}
            type={param}
            key={props.title + param}
            onParamUpdate={props.onParamUpdate}
            paramsData={props.paramsData}
          />
        ))}

        <button
          className="col-sm-3 btn btn-sm btn-info mt-3"
          id={`Opt${props.title}Btn`}
          onClick={optimizeHandler}
        >
          Optimize
        </button>
      </div>
    </div>
  );
};

export default MethodSettings;
