import ExpSettings from "./exp-settings";
import SmoothingParam from "./sm-param";

const SimpleSettings = (props) => {
  return (
    <div>
      <ExpSettings title="Simple" />
      <div id="simpleParams">
        <SmoothingParam title="Simple" type="Alpha" />
        <button className="col-sm-3 btn btn-sm btn-info mt-3">Optimize</button>
      </div>
    </div>
  );
};

export default SimpleSettings;
