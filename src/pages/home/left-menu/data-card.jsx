import Card from "../../../components/card";
const DataCard = (props) => {
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
        ></textarea>
        <div className="row justify-content-end">
          <button type="button" className="col-3 btn btn-light btn-sm m-2">
            Reset
          </button>
          <button type="button" className="col-3 btn btn-primary btn-sm m-2">
            Update
          </button>
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
