import Card from "./components/card";
import LeftMenu from "./pages/home/left-menu/left-menu";
import TopNavbar from "./components/top-navbar/top-navbar";
import Graph from "./pages/home/content/graph";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div style={{ margin: "0.5rem" }}>
        <h1>Hello World!</h1>

        <div className="row">
          <div className="col-md-4">
            <LeftMenu />
          </div>
          <div className="col-md-8">
            <Card>
              <h5 className="card-title">Title!</h5>
              <p className="card-text">Some Text</p>
              <Graph />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
