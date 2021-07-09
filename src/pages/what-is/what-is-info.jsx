import TripAddEquation from "../../images/trip-addition-equations.png";
import TripMultEquation from "../../images/trip-mult-equations.png";

export const generalInfo = (
  <>
    <p>
      Exponential smoothing was proposed in the late 1950s (Brown, 1959 Holt,
      1957 Winters, 1960) , and has motivated some of the most successful
      forecasting methods. Forecasts produced using exponential smoothing
      methods are weighted averages of past observations, with the weights
      decaying exponentially as the observations get older. In other words, the
      more recent the observation the higher the associated weight. This
      framework generates reliable forecasts quickly and for a wide range of
      time series, which is a great advantage and of major importance to
      applications in industry.
    </p>
    <p>There are 3 types of Exponential Smoothing witch described below.</p>
  </>
);

export const simpleInfo = (
  <>
    <p>
      Simple Exponential Smoothing is a time series forecasting method for
      univariate data without a trend or seasonality. It requires a single
      parameter, alpha (), also called the data smoothing factor. Alpha is a
      smoothing factor that takes values between 0 and 1. It determines how fast
      the weight decreases for previous observations (the level). Large values
      mean that the model pays attention mainly to the most recent past
      observations. In contrast, smaller values mean more of the history is
      considered when making a prediction.
    </p>
    <p>
      The simplest form of exponential smoothing is given by the formula:{" "}
      <br></br>
      <i>Ft+1 = αXt + (1 - α )Ft</i>
      <br></br> In other words, the forecast at time <i>t+1 (Ft+1)</i> is equal
      to a weighted average between the most recent observation Xt and the
      previous forecast <i>Ft</i>. The process has to start somewhere, so we let
      the first forecast value at time <i>t=0</i> be denoted by <i>X0</i>. Then
      the prediction of time <i>t+1</i> will be calculated base on the previous
      observations as follow:<br></br>{" "}
      <i>
        F0 = X0 <br></br>
        F1 = αX0 + (1 - α )F0 <br></br>F2 = αX1 + (1 - α )F1 <br></br>:<br></br>{" "}
        Ft+1 = αXt + (1 - α )Ft
      </i>
    </p>
  </>
);

export const doubleInfo = (
  <>
    <p>
      Double Exponential Smoothing extends Simple Exponential Smoothing to add
      support for trends in the univariate time series. In addition to the alpha
      parameter for controlling the smoothing factor for the level, an
      additional smoothing factor is added to control the decay of the influence
      of the change in a trend called beta <i>(0≤β≤1)</i>.
    </p>
    <p>
      This method involves a forecast equation and two smoothing equations (one
      for the level and one for the trend):
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
      <i>lt</i> denotes an estimate of the level of the series at time t, and bt
      denotes an estimate of the trend (slope) of the series at time t.
    </p>
  </>
);

export const tripleInfo = (
  <>
    <p>
      Triple Exponential Smoothing extends Double Exponential Smoothing to
      capture seasonality. In addition to the alpha and beta smoothing factors,
      a new parameter called gamma <i>(0≤γ≤1)</i> is added, to control the
      influence on the seasonal component.
    </p>
    <p>
      There are two variations to this method that differ in the nature of the
      seasonal component. The additive method is preferred when the seasonal
      variations are roughly constant through the series, while the
      multiplicative method is preferred when the seasonal variations are
      changing proportionally to the level of the series. For example, if we
      sell 10,000 more apartments every month of December than we do in
      November, the seasonality has an additive nature. However, if we sell 10%
      more apartments in the summer months than we do in the winter months, the
      seasonality has a multiplicative nature. This method involves a forecast
      equation and three smoothing equations (one for the level, one for the
      trend, and one for the seasonal component).
    </p>
    <p>
      <u>The equations for the additive method are:</u>
      <br></br>
      <img src={TripAddEquation} alt="" width="40%" />
    </p>
    <p>
      <u>The equations for the multiplicative method are:</u>
      <br></br>
      <img src={TripMultEquation} alt="" width="30%" />
    </p>
  </>
);
