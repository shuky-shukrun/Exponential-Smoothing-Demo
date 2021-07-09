import {
  generalInfo,
  simpleInfo,
  doubleInfo,
  tripleInfo,
  creditInfo,
} from "./what-is-info";
import Card from "../../components/card";
import InfoComponent from "../../components/info-component";

const WhatIsPage = (props) => {
  return (
    <div className="px-3 pb-3">
      <Card>
        <InfoComponent title="Exponential Smoothing" info={generalInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Simple Exponential Smoothing" info={simpleInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Double Exponential Smoothing" info={doubleInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Triple Exponential Smoothing" info={tripleInfo} />
        <hr className="mt-4 mb-4"></hr>
        <InfoComponent title="Credit" info={creditInfo} />
      </Card>
    </div>
  );
};

export default WhatIsPage;
