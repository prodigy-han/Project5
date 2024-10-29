import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ weatherData }) => {
  const cityNames = weatherData.map(data => data.city_name);
  const temperatures = weatherData.map(data => data.temp);

  const data = {
    labels: cityNames,
    datasets: [
      {
        label: 'Temperature (°F)',
        data: temperatures,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div className="weather-chart">
      <h2>City Temperatures</h2>
      <Bar data={data} />
    </div>
  );
};

export default WeatherChart;