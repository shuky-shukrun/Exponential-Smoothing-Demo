import Card from "../../components/card";

const WhatIsDouble = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <div>
        <h4 className="card-title main-heading ">
          {props.title} Exponential smoothing
        </h4>
        <div className="underline"></div>
      </div>
      <p>
        Double Exponential Smoothing extends Simple Exponential Smoothing to add
        support for trends in the univariate time series. In addition to the
        alpha parameter for controlling the smoothing factor for the level, an
        additional smoothing factor is added to control the decay of the
        influence of the change in a trend called beta <i>(0≤β≤1)</i>.
      </p>
      <p>
        This method involves a forecast equation and two smoothing equations
        (one for the level and one for the trend):
        <br></br>
        <i>
          l0 =X0 <br></br>
          b0 =X1- X0
        </i>
        <br></br>
        Forecast equation: <i>Ft+1 =lt +bt </i>
        <br></br>
        Level equation: <i>lt = αXt + (1 - α )(lt-1 +bt-1) </i>
        <br></br>
        Trend equation: <i>bt = β(lt - lt-1)+ (1 - β )bt-1 </i>
        <br></br>
      </p>
      <p>
        <i>lt</i> denotes an estimate of the level of the series at time t, and
        bt denotes an estimate of the trend (slope) of the series at time t.
      </p>
    </Card>
  );
};

export default WhatIsDouble;
