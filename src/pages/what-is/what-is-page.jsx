import {
  generalInfo,
  simpleInfo,
  doubleInfo,
  tripleInfo,
} from "./what-is-info";
import Card from "../../components/card";
import InfoComponent from "../../components/info-component";

const WhatIsPage = (props) => {
  return (
    <div className="px-3 pb-3">
      <Card>
        <InfoComponent title="Exponential smoothing" info={generalInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Simple Exponential smoothing" info={simpleInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Double Exponential smoothing" info={doubleInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Triple Exponential smoothing" info={tripleInfo} />
      </Card>
    </div>
  );
};

export default WhatIsPage;
