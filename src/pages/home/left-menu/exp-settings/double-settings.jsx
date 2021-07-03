import ExpSettings from "./exp-settings";
import SmoothingParam from "./sm-param";

const DoubleSettings = (props) => {
  return (
    <div className={props.className ? props.className : ""}>
      <ExpSettings title="Double" />
      <div id="doubleParams">
        <SmoothingParam title="Double" type="Alpha" />
        <SmoothingParam title="Double" type="Beta" />
        <button className="col-sm-3 btn btn-sm btn-info mt-3">Optimize</button>
      </div>
    </div>
  );
};

export default DoubleSettings;
