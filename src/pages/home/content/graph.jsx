import { Line } from "react-chartjs-2";

const Graph = (props) => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
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
