import ExpSettings from "./exp-settings";
import SmoothingParam from "./sm-param";
import Card from "../../../../card";

const SimpleSettings = (props) => {
  return (
    <Card className="mb-3">
      <div>
        <ExpSettings title="Simple" />
        <div id="simpleParams">
          <SmoothingParam title="Simple" type="Alpha" />
          <button className="col-3 btn btn-sm btn-info mt-3">Optimize</button>
        </div>
      </div>
    </Card>
  );
};

export default SimpleSettings;
