import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetail = ({ weatherData }) => {
  const { cityName } = useParams();
  const cityData = weatherData.find(data => data.city_name === cityName);

  if (!cityData) {
    return <p>City not found</p>;
  }

  return (
    <div className="city-detail">
      <h2>{cityData.city_name} Details</h2>
      <p>Temperature: {cityData.temp}°F</p>
      <p>Humidity: {cityData.rh}%</p>
      <p>Weather: {cityData.weather.description}</p>
      <p>Visibility: {cityData.visibility} km</p>
      <p>UV Index: {cityData.uv}</p>
      <p>Precipitation: {cityData.precip} mm</p>
    </div>
  );
};

export default CityDetail;