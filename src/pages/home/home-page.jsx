import LeftMenu from "./left-menu/left-menu";
import Card from "../../components/card";
import Graph from "./content/graph";
import { useState } from "react";

const HomePage = (props) => {
  const graphDataDefault = [
    15339, 21345, 18483, 24003, 23489, 24092, 21543, 16339, 22345, 19483, 25003,
    24489, 25092, 22543,
  ];
  const [graphData, setGraphData] = useState([
    15339, 21345, 18483, 24003, 23489, 24092, 21543, 16339, 22345, 19483, 25003,
    24489, 25092, 22543,
  ]);

  const [paramsData, setParamData] = useState({
    SimpleAlpha: 0.5,
    DoubleAlpha: 0.5,
    DoubleBeta: 0.5,
    TripleAlpha: 0.5,
    TripleBeta: 0.5,
    TripleGama: 0.5,
    TripleSeason: 7,
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
    <div className={`${props.className ? props.className : ""}`}>
      <div className="row px-3">
        <LeftMenu
          className="col-lg mb-3"
          graphData={graphData}
          onDataUpdate={dataUpdateHandler}
          onParamUpdate={paramUpdateHandler}
          defaultData={graphDataDefault}
          paramsData={paramsData}
        />
        <div className="col-md-8 mb-3 ms-2 table-responsive p-0">
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
