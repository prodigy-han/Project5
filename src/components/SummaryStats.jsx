import React from 'react';
import './SummaryStats.css'; 

const SummaryStats = ({ weatherData }) => {
  const totalCities = weatherData.length;
  const avgTemp = weatherData.length > 0 ? (
    weatherData.reduce((acc, item) => acc + item.temp, 0) / weatherData.length
  ).toFixed(2) : 0;

  const avgHumidity = weatherData.length > 0 ? (
    weatherData.reduce((acc, item) => acc + item.rh, 0) / weatherData.length
  ).toFixed(2) : 0;

  return (
    <div className="summary-cards-container">
      <div className="card">
        <h3>Total Cities</h3>
        <h3>{totalCities}</h3>
      </div>
      <div className="card">
        <h3>Average Temperature</h3>
        <h3>{avgTemp}°F</h3>
      </div>
      <div className="card">
        <h3>Average Humidity</h3>
        <p>{avgHumidity}%</p>
      </div>
    </div>
  );
};

export default SummaryStats;