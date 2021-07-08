const AboutGeneral = (props) => {
  return (
    <section className="section bg-c-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h3 className="main-heading">About Us</h3>
            <div className="underline "></div>
            <p>
              Exponential smoothing was proposed in the late 1950s (Brown, 1959
              Holt, 1957 Winters, 1960) , and has motivated some of the most
              successful forecasting methods. Forecasts produced using
              exponential smoothing methods are weighted averages of past
              observations, with the weights decaying exponentially as the
              observations get older.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGeneral;
