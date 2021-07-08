import { useRef, useState } from "react";
import Card from "../../../components/card";

const DataCard = (props) => {
  const [graphData, setData] = useState(props.graphData);
  const graphDataRef = useRef();

  function changeDataHandler(event) {
    let dataStr = event.target.value;
    let newData = graphDataRef.current.value.split(",");
    newData = newData.map((val) => parseInt(val));
    newData = newData.filter((val) => !isNaN(val));
    setData(dataStr);
    if (newData.length >= 2) props.onDataUpdate(newData);
  }

  function resetDataHandler() {
    setData(props.defaultData);
    props.onDataUpdate(props.defaultData);
  }

  return (
    <Card
      style={props.style ? props.style : {}}
      className={props.className ? props.className : ""}
    >
      <div>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Data (comma separated):
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="10,4,1,6,..., 100"
          ref={graphDataRef}
          value={graphData}
          //defaultValue={props.data}
          onChange={changeDataHandler}
        ></textarea>
        <div className="row justify-content-end">
          <button
            type="button"
            className="col-3 btn btn-warning btn-sm m-2"
            onClick={resetDataHandler}
          >
            Reset
          </button>
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
