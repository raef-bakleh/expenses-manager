import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxAllValue = Math.max(...dataPointsValue)
  return (
    <div>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.id}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
