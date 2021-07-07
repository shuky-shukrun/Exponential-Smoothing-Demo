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
    SimpleSwitch: false,
    DoubleSwitch: false,
    TripleSwitch: false,
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
      <div className="row">
        <LeftMenu
          className="col-md-4 mx-3"
          graphData={graphData}
          onDataUpdate={dataUpdateHandler}
          onParamUpdate={paramUpdateHandler}
          defaultData={graphDataDefault}
          paramsData={paramsData}
        />
        <Card className="align-self-start col-md-7 mx-3 ">
          <h5 className="card-title">Title!</h5>
          <p className="card-text">Some Text</p>
          <Graph graphData={graphData} paramsData={paramsData} />
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
