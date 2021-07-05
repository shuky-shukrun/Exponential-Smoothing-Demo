import { Line } from "react-chartjs-2";

const Graph = (props) => {
  const graphLabels = props.data.map((val, i) => "t" + i);

  return (
    <div>
      <Line
        data={{
          labels: graphLabels,
          datasets: [
            {
              data: props.data,
              label: "Visitors",
              lineTension: 0,
              backgroundColor: "transparent",
              borderColor: "#007bff",
              borderWidth: 4,
              pointBackgroundColor: "#007bff",
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
