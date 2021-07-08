import { useRef, useState } from "react";
import Card from "../../../components/card";
import { savaData, loadData } from "../../../contexts/db-context";
import { useAuth } from "../../../contexts/auth-context";

const DataCard = (props) => {
  const [graphData, setData] = useState(props.graphData);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  const graphDataRef = useRef();

  function changeDataHandler(event) {
    let dataStr = event.target.value;
    let newData = event.target.value.split(",");
    newData = newData.map((val) => parseInt(val));
    newData = newData.filter((val) => !isNaN(val));
    let regEx = /^(\s*|[-,0-9]+)$/;
    if (regEx.test(dataStr)) setData(dataStr);
    props.onDataUpdate(newData);
  }

  function clearDataHandler() {
    setData([]);
    props.onDataUpdate([]);
  }

  function saveDataHandler() {
    setLoading(true);
    savaData(currentUser.uid, { data: graphDataRef.current.value }).then(() => {
      setLoading(false);
    });
  }

  function loadDataHandler() {
    setLoading(true);
    loadData(currentUser.uid).then((doc) => {
      // a trick: arrange the data in a way that will match the changeDataHandler method
      let newData = {
        target: {
          value: doc.data().data,
        },
      };
      changeDataHandler(newData);
      setLoading(false);
    });
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
          placeholder="Enter at least 3 points to make a prediction"
          ref={graphDataRef}
          value={graphData}
          onChange={changeDataHandler}
        ></textarea>
        <div
          className={`row justify-content-${currentUser ? "center" : "end"}`}
        >
          <button
            type="button"
            className="col-3 btn btn-warning btn-sm m-2"
            onClick={clearDataHandler}
          >
            Clear
          </button>
          {currentUser && (
            <button
              type="button"
              className="col-3 btn btn-primary btn-sm m-2"
              onClick={loadDataHandler}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load from DB"}
            </button>
          )}
          {currentUser && (
            <button
              type="button"
              className="col-3 btn btn-success btn-sm m-2"
              onClick={saveDataHandler}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Data"}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
