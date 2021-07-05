import { Line } from "react-chartjs-2";

import { DoubleExponentialSmoothing } from "./exponential-smoothing";

const Graph = (props) => {
  let expMethod = new DoubleExponentialSmoothing(props.data, 0.2);
  expMethod.optimizeParameter(50);
  const prediction = expMethod.predict();
  //console.log(prediction);
  const graphLabels = prediction.map((val, i) => "t" + i);

  return (
    <div>
      <Line
        data={{
          labels: graphLabels,
          datasets: [
            {
              data: props.data,
              label: "Visitors",
              lineTension: 0.3,
              backgroundColor: "transparent",
              borderColor: "#007bff",
              borderWidth: 4,
              pointBackgroundColor: "#007bff",
            },
            {
              data: prediction,
              label: "Visitor",
              lineTension: 0.3,
              backgroundColor: "transparent",
              borderColor: "#0",
              borderWidth: 4,
              pointBackgroundColor: "#0",
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;