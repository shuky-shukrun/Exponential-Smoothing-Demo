import Card from "../../components/card";

const WhatIsSimple = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <div>
        <h4 className="card-title main-heading ">
          {props.title} Exponential smoothing
        </h4>
        <div className="underline"></div>
      </div>
      <p>
        Simple Exponential Smoothing is a time series forecasting method for
        univariate data without a trend or seasonality. It requires a single
        parameter, alpha (), also called the data smoothing factor. Alpha is a
        smoothing factor that takes values between 0 and 1. It determines how
        fast the weight decreases for previous observations (the level). Large
        values mean that the model pays attention mainly to the most recent past
        observations. In contrast, smaller values mean more of the history is
        considered when making a prediction.
      </p>
      <p>
        The simplest form of exponential smoothing is given by the formula:{" "}
        <br></br>
        <i>Ft+1 = αXt + (1 - α )Ft</i>
        <br></br> In other words, the forecast at time <i>t+1 (Ft+1)</i> is
        equal to a weighted average between the most recent observation Xt and
        the previous forecast <i>Ft</i>. The process has to start somewhere, so
        we let the first forecast value at time <i>t=0</i> be denoted by{" "}
        <i>X0</i>. Then the prediction of time <i>t+1</i> will be calculated
        base on the previous observations as follow:<br></br>{" "}
        <i>
          F0 = X0 <br></br>
          F1 = αX0 + (1 - α )F0 <br></br>F2 = αX1 + (1 - α )F1 <br></br>:
          <br></br> Ft+1 = αXt + (1 - α )Ft
        </i>
      </p>
    </Card>
  );
};

export default WhatIsSimple;
