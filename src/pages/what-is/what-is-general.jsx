import Card from "../../components/card";

const WhatIsGeneral = (props) => {
  return (
    <Card className={`mx-3 ${props.className ? props.className : ""}`}>
      <div>
        <h4 className="card-title main-heading ">Exponential smoothing</h4>
        <div className="underline"></div>
      </div>{" "}
      <p>
        Exponential smoothing was proposed in the late 1950s (Brown, 1959 Holt,
        1957 Winters, 1960) , and has motivated some of the most successful
        forecasting methods. Forecasts produced using exponential smoothing
        methods are weighted averages of past observations, with the weights
        decaying exponentially as the observations get older. In other words,
        the more recent the observation the higher the associated weight. This
        framework generates reliable forecasts quickly and for a wide range of
        time series, which is a great advantage and of major importance to
        applications in industry.
      </p>
      <p>There are 3 types of Exponential Smoothing witch described below.</p>
    </Card>
  );
};

export default WhatIsGeneral;
