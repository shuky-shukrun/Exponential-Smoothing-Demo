import { Line } from "react-chartjs-2";

import {
  SimpleExponentialSmoothing,
  DoubleExponentialSmoothing,
  HoltWintersSmoothing,
} from "./exponential-smoothing";

const Graph = (props) => {
  const { graphData, paramsData } = props;
  const simpleExp = new SimpleExponentialSmoothing(
    graphData,
    paramsData["SimpleAlpha"]
  );
  const doubleExp = new DoubleExponentialSmoothing(
    graphData,
    paramsData["DoubleAlpha"],
    paramsData["DoubleBeta"]
  );
  let tripleExp = new HoltWintersSmoothing(
    graphData,
    paramsData["TripleAlpha"],
    paramsData["TripleBeta"],
    paramsData["TripleGama"],
    paramsData["TripleSeason"] ? paramsData["TripleSeason"] : 7,
    true
  );

  const simplePrediction = simpleExp.predict();
  const doublePrediction = doubleExp.predict();
  const triplePrediction = tripleExp.predict();

  const graphLabels = triplePrediction.map((val, i) => "t" + i);

  return (
    <div>
      <Line
        data={{
          labels: graphLabels,
          datasets: [
            // user's data
            {
              data: graphData,
              label: "User's Data",
              lineTension: 0.3,
              backgroundColor: "transparent",
              borderColor: "#E43FDE",
              borderWidth: 2,
              pointBackgroundColor: "#E43FDE",
            },
            // simple prediction
            {
              data: simplePrediction,
              label: "Simple",
              lineTension: 0.3,
              backgroundColor: "transparent",
              borderColor: "#3FE4DE",
              borderWidth: 2,
              pointBackgroundColor: "#3FE4DE",
              hidden: props.paramsData["SimpleSwitch"],
            },
            // double prediction
            {
              data: doublePrediction,
              label: "Double",
              lineTension: 0.3,
              backgroundColor: "transparent",
              borderColor: "#3FE450",
              borderWidth: 2,
              pointBackgroundColor: "#3FE450",
              hidden: props.paramsData["DoubleSwitch"],
            },
            // triple prediction
            {
              data: triplePrediction,
              label: "Triple",
              lineTension: 0.3,
              backgroundColor: "transparent",
              borderColor: "#E4A73F",
              borderWidth: 2,
              pointBackgroundColor: "#E4A73F",
              hidden: props.paramsData["TripleSwitch"],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              onClick: null,
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
