import ExpSettings from "./exp-settings";
import SmoothingParam from "./sm-param";
import Card from "../../../../card";

const TripleSettings = (props) => {
  return (
    <Card className="mb-3">
      <div>
        <ExpSettings title="Triple" />
        <div id="tripleParams">
          <SmoothingParam title="Triple" type="Alpha" />
          <SmoothingParam title="Triple" type="Beta" />
          <SmoothingParam title="Triple" type="Gama" />
          <button className="col-sm-3 btn btn-sm btn-info mt-3">
            Optimize
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TripleSettings;
