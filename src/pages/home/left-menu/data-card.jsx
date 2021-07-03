import { useRef, useState } from "react";
import Card from "../../../components/card";

const DataCard = (props) => {
  const [data, setData] = useState(props.data);
  const dataRef = useRef();

  function dataChangeHandler(event) {
    console.log(dataRef.current.value);
    let newData = dataRef.current.value.split(",");
    newData = newData.map((val) => parseInt(val));
    console.log(newData);
    setData(newData);
    props.onDataUpdate(newData);
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
          ref={dataRef}
          defaultValue={data}
          onChange={dataChangeHandler}
        ></textarea>
        <div className="row justify-content-end">
          <button type="button" className="col-3 btn btn-light btn-sm m-2">
            Reset
          </button>
          <button
            type="button"
            className="col-3 btn btn-primary btn-sm m-2"
            onClick={dataChangeHandler}
          >
            Update
          </button>
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
