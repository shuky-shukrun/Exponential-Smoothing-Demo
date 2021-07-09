import Card from "../../components/card";
import TripAddEquation from "../../images/trip-addition-equations.png";
import TripMultEquation from "../../images/trip-mult-equations.png";

const WhatIsComponent = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <div>
        <h4 className="card-title main-heading ">
          {props.title} Exponential smoothing
        </h4>
        <div className="underline"></div>
      </div>
      {props.info}
    </Card>
  );
};

export default WhatIsComponent;
