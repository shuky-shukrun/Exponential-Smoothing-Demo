import LeftMenu from "./left-menu/left-menu";
import Card from "../../components/card";
import Graph from "./content/graph";
import { useState } from "react";

const HomePage = (props) => {
  const graphDataDefault = [15339, 21345, 18483, 24003, 23489, 24092, 12034];
  const [graphData, setGraphData] = useState([
    15339, 21345, 18483, 24003, 23489, 24092, 12034,
  ]);

  function dataUpdateHandler(data) {
    setGraphData(data);
  }

  return (
    <div className={`${props.className ? props.className : ""}`}>
      <div className="row">
        <LeftMenu
          className="col-md-4 mx-3"
          data={graphData}
          onDataUpdate={dataUpdateHandler}
          defaultData={graphDataDefault}
        />
        <Card className="align-self-start col-md-7 mx-3 ">
          <h5 className="card-title">Title!</h5>
          <p className="card-text">Some Text</p>
          <Graph data={graphData} />
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
