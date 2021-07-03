import ExpSettings from "./exp-settings";
import SmoothingParam from "./sm-param";
import Card from "../../../../card";

const DoubleSettings = (props) => {
  return (
    <Card className="mb-3">
      <div>
        <ExpSettings title="Double" />
        <div id="doubleParams">
          <SmoothingParam title="Double" type="Alpha" />
          <SmoothingParam title="Double" type="Beta" />
          <button className="col-sm-3 btn btn-sm btn-info mt-3">
            Optimize
          </button>
        </div>
      </div>
    </Card>
  );
};

export default DoubleSettings;
