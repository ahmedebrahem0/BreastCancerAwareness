import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartComponent() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");
    const barColors = [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
    ];

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "Netherlands: 99.0",
          "Cyprus 104.5",
          "New Zealand: 92.4",
          "Australia: 94.0",
          "Germany: 91.6",
          "Germany: 91.6",
          "France 105.4",
          "United Kingdom: 94.2",
          "Ireland: 92.0",
          "Belgium: 101.1",
        ],
        datasets: [
          {
            label: "Data",
            data: [12, 18, 6, 7, 4, 2, 19, 8, 5, 15],
            backgroundColor: barColors,
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="allCart">
      <canvas ref={chartRef} className="chart"/>
    </div>
  );
}
