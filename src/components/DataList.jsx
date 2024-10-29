import React from 'react';
import { Link } from 'react-router-dom';

const DataList = ({ weatherData }) => {
  return (
    <div className="data-list">
      <h2>Weather Data</h2>
      <ul>
        {weatherData.map((data, index) => (
          <li key={index}>
            <Link to={`/city/${data.city_name}`}>
              <p>City: {data.city_name}</p>
              <p>Temperature: {data.temp}°F</p>
              <p>Humidity: {data.rh}%</p>
              <p>Weather: {data.weather.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;