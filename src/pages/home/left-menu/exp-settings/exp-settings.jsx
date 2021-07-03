const ExpSettings = (props) => {
  return (
    <div className="form-check form-switch mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" for="flexSwitchCheckDefault">
        {props.title} Exponential Smoothing
      </label>
    </div>
  );
};

export default ExpSettings;
