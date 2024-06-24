import React from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

export default function Chart() {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Mock data for demonstration purposes
      const data = {
        data: [
          { _id: "2021-01", revenue: 1000 },
          { _id: "2021-02", revenue: 1500 },
          { _id: "2021-03", revenue: 2000 },
          // Add more data points as needed
        ],
      };

      console.log(data);
      setChartData({
        labels: data.data.map((item) => item._id),
        datasets: [
          {
            label: "Revenue",
            data: data.data.map((item) => item.revenue),
            fill: true,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.3)",
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Revenue" },
          },
        }}
      />
    </div>
  );
}
