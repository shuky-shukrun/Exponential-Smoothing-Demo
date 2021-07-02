import Card from "../card";

const LeftMenu = (props) => {
  return (
    <Card>
      <h5 className="card-title">Title!</h5>

      <form>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Data (comma separated):
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="10,4,1,6,..., 100"
          ></textarea>
        </div>
      </form>
      <p className="card-text">Some Text</p>
    </Card>
  );
};

export default LeftMenu;
