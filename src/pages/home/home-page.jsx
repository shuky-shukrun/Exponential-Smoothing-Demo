import LeftMenu from "./left-menu/left-menu";
import Card from "../../components/card";
import Graph from "./content/graph";
import { useState } from "react";

const HomePage = (props) => {
  const graphDataDefault = [
    16070, 15704, 17092, 25586, 19741, 19340, 20579, 29328, 22717, 23185, 25358,
    35746, 27625, 27515, 29107, 38763,
  ];
  const [graphData, setGraphData] = useState([
    16070, 15704, 17092, 25586, 19741, 19340, 20579, 29328, 22717, 23185, 25358,
    35746, 27625, 27515, 29107, 38763,
  ]);

  const [paramsData, setParamData] = useState({
    SimpleAlpha: 0.5,
    DoubleAlpha: 0.5,
    DoubleBeta: 0.5,
    TripleAlpha: 0.5,
    TripleBeta: 0.5,
    TripleGama: 0.5,
    TripleSeason: 4,
    SimpleSwitch: true,
    DoubleSwitch: true,
    TripleSwitch: true,
  });

  function dataUpdateHandler(data) {
    setGraphData(data);
  }

  function paramUpdateHandler(params) {
    let newParams = {};
    newParams = Object.assign(newParams, paramsData);
    params.forEach((param) => {
      newParams[param.id] = param.value;
    });
    setParamData(newParams);
  }

  return (
    <div className="px-3">
      <div className="row">
        <LeftMenu
          className="col-md-4 mb-3"
          graphData={graphData}
          onDataUpdate={dataUpdateHandler}
          onParamUpdate={paramUpdateHandler}
          defaultData={graphDataDefault}
          paramsData={paramsData}
        />
        <div className="col-md-8">
          <Card>
            <h4 className="card-title text-center">
              Exponential Smoothing Graph
            </h4>
            <Graph graphData={graphData} paramsData={paramsData} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
