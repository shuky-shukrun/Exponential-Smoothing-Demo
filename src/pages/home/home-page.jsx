import LeftMenu from "./left-menu/left-menu";
import Card from "../../components/card";
import Graph from "./content/graph";

const HomePage = (props) => {
  return (
    <div className={`${props.className ? props.className : ""}`}>
      <div className="row">
        <LeftMenu className="col-md-4 mx-3" />
        <Card className="col-md-7 mx-3">
          <h5 className="card-title">Title!</h5>
          <p className="card-text">Some Text</p>
          <Graph />
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
