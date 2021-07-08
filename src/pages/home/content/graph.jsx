import { Line } from "react-chartjs-2";

import {
  SimpleExponentialSmoothing,
  HoltSmoothing,
  HoltWintersSmoothing,
} from "./exponential-smoothing";

const Graph = (props) => {
  const { graphData, paramsData } = props;

  let simplePrediction = [];
  let doublePrediction = [];
  let triplePrediction = [];
  let graphLabels = [];

  if (graphData.length > 2) {
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

    simplePrediction = simpleExp.predict();
    doublePrediction = doubleExp.predict();
    triplePrediction = tripleExp.predict();
    graphLabels = triplePrediction
      .filter((val) => !Number.isNaN(val))
      .map((val, i) => "t" + i);
  } else {
    graphLabels = graphData
      .filter((val) => !Number.isNaN(val))
      .map((val, i) => "t" + i);
  }

  return (
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
  );
};

export default Graph;
