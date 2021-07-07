import { Line } from "react-chartjs-2";

import {
  SimpleExponentialSmoothing,
  HoltSmoothing,
  HoltWintersSmoothing,
} from "./exponential-smoothing";

const Graph = (props) => {
  const { graphData, paramsData } = props;
  const simpleExp = new SimpleExponentialSmoothing(
    graphData,
    paramsData.SimpleAlpha
  );
  const doubleExp = new HoltSmoothing(
    graphData,
    paramsData.DoubleAlpha,
    paramsData.DoubleBeta
  );
  const tripleExp = new HoltWintersSmoothing(
    graphData,
    paramsData.TripleAlpha,
    paramsData.TripleBeta,
    paramsData.TripleGama,
    paramsData.TripleSeason,
    true
  );

  const simplePrediction = simpleExp.predict();
  const doublePrediction = doubleExp.predict();
  const triplePrediction = tripleExp.predict();
  const graphLabels = triplePrediction
    .filter((val) => !Number.isNaN(val))
    .map((val, i) => "t" + i);

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
              hidden: paramsData.SimpleSwitch,
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
              hidden: paramsData.DoubleSwitch,
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
              hidden: paramsData.TripleSwitch,
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
