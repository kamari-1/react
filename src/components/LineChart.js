/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Link, useParams } from "react-router-dom";
import Data from "../data/data.json";

function LineChart() {
  const { index } = useParams();

  let temperature_arr = Data.devices[index].items[0].items,
    oxygen_arr = Data.devices[index].items[1].items,
    temperature_data = [],
    temperature_labels = [],
    oxygen_labels = [],
    oxygen_data = [];

  // Get Temperature data
  const getTemperature = () => {
    temperature_arr.map((elem) => temperature_data.push(elem.value));
    temperature_arr.map((elem) =>
      temperature_labels.push(
        new Date(elem.timestamp).toTimeString().slice(0, 8)
      )
    );
  };

  // Get Oxygen data
  const getOxygen = () => {
    oxygen_arr.map((elem) => oxygen_data.push(elem.value));
    oxygen_arr.map((elem) =>
      oxygen_labels.push(new Date(elem.timestamp).toTimeString().slice(0, 8))
    );
  };

  useEffect(() => {
    getOxygen();
    getTemperature();
    console.clear();
    console.log(oxygen_data);
    console.log(oxygen_labels);
    console.log(temperature_data);
    console.log(temperature_labels);
  }, []);

  const temperature = {
    labels: temperature_labels,
    datasets: [
      {
        label: "Temperature (°C)",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(252, 163, 17,0.3)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: temperature_data,
      },
    ],
  };
  const oxygen = {
    labels: oxygen_labels,
    datasets: [
      {
        label: "Oxygen (mg/l)",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,0.3)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: oxygen_data,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>{`Device ${+index + 1}`}</h2>

      <div className="chart">
        <Line
          data={temperature}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>

      <div className="chart">
        <Line
          data={oxygen}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>

      <Link to={"/"}>
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default LineChart;
