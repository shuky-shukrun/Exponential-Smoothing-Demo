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
              data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
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
