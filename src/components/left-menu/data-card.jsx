import Card from "../card";
const DataCard = (props) => {
  return (
    <Card style={props.style} className={props.className}>
      <div>
        <label for="exampleFormControlTextarea1" class="form-label">
          Data (comma separated):
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="10,4,1,6,..., 100"
        ></textarea>
        <div className="row justify-content-end">
          <button type="button" className="col-4 btn btn-light btn-sm m-2">
            Reset
          </button>
          <button type="button" class="col-4 btn btn-primary btn-sm m-2">
            Update
          </button>
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
