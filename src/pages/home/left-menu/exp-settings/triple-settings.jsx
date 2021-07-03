import MethodSwitch from "./method-switch";
import SmoothingParam from "./sm-param";

const TripleSettings = (props) => {
  return (
    <div className={props.className ? props.className : ""}>
      <MethodSwitch title="Triple" isChecked={props.isChecked} />
      <div id="tripleParams">
        <SmoothingParam title="Triple" type="Alpha" />
        <SmoothingParam title="Triple" type="Beta" />
        <SmoothingParam title="Triple" type="Gama" />
        <button className="col-sm-3 btn btn-sm btn-info mt-3">Optimize</button>
      </div>
    </div>
  );
};

export default TripleSettings;
