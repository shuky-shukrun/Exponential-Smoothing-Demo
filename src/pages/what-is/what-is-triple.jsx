import Card from "../../components/card";
import TripAddEquation from "../../images/trip-addition-equations.png";
import TripMultEquation from "../../images/trip-mult-equations.png";

const WhatIsTriple = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <h4 className="card-title">{props.title} Exponential smoothing</h4>
      <p>
        Triple Exponential Smoothing extends Double Exponential Smoothing to
        capture seasonality. In addition to the alpha and beta smoothing
        factors, a new parameter called gamma <i>(0≤γ≤1)</i> is added, to
        control the influence on the seasonal component.
      </p>
      <p>
        There are two variations to this method that differ in the nature of the
        seasonal component. The additive method is preferred when the seasonal
        variations are roughly constant through the series, while the
        multiplicative method is preferred when the seasonal variations are
        changing proportionally to the level of the series. For example, if we
        sell 10,000 more apartments every month of December than we do in
        November, the seasonality has an additive nature. However, if we sell
        10% more apartments in the summer months than we do in the winter
        months, the seasonality has a multiplicative nature. This method
        involves a forecast equation and three smoothing equations (one for the
        level, one for the trend, and one for the seasonal component).
      </p>
      <p>
        <u>The equations for the additive method are:</u>
        <br></br>
        <img src={TripAddEquation} alt="" srcset="" width="40%" />
      </p>
      <p>
        <u>The equations for the multiplicative method are:</u>
        <br></br>
        <img src={TripMultEquation} alt="" srcset="" width="30%" />
      </p>
    </Card>
  );
};

export default WhatIsTriple;
