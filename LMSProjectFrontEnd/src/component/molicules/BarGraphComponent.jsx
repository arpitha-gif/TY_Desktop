import React, { useState } from "react";
import Chart from "react-apexcharts";
// import "./App.css";

// import React from "react";

const BarGraphComponent = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      series: [
        {
          data: [
            {
              x: "category A",
              y: 10,
            },
            {
              x: "category B",
              y: 18,
            },
            {
              x: "category C",
              y: 13,
            },
          ],
        },
      ],
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default BarGraphComponent;
