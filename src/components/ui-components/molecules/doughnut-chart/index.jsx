// src/components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Doughnut data={chartData} />
    </div>
  );
}
export default PieChart;
