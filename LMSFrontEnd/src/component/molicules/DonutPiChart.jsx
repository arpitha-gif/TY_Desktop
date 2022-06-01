import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [75, 25],
      labels: ["A", "B"],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          labels={this.state.labels}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
