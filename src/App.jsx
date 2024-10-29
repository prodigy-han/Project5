import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataList from './components/DataList';
import SummaryStats from './components/SummaryStats';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import CityDetail from './components/CityDetail';
import WeatherChart from './components/WeatherChart';
import './index.css';

const API_KEY = '75ec7eb2980b4eaf9f227afa4360390a';
const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?city=Raleigh,NC&key=${API_KEY}`);
        const mockData = [
          { city_name: "New York", temp: 75, rh: 50, visibility: 10, uv: 5, precip: 0, weather: { description: "Partly cloudy" } },
          { city_name: "Los Angeles", temp: 80, rh: 40, visibility: 10, uv: 9, precip: 0, weather: { description: "Sunny" } },
          { city_name: "Chicago", temp: 60, rh: 65, visibility: 8, uv: 3, precip: 1, weather: { description: "Cloudy" } },
          { city_name: "Miami", temp: 85, rh: 70, visibility: 10, uv: 8, precip: 0.5, weather: { description: "Clear" } },
          { city_name: "Denver", temp: 68, rh: 30, visibility: 7, uv: 6, precip: 2, weather: { description: "Rainy" } },
        ];
        const fullData = [...response.data.data, ...mockData];
        setWeatherData(fullData);
        setFilteredData(fullData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = weatherData.filter(item => item.city_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [searchTerm, filters, weatherData]);

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">Weather Dashboard</h1>
        <div className="search-filter-container">
          <SearchBar setSearchTerm={setSearchTerm} />
          <FilterOptions setFilters={setFilters} />
        </div>
        <div className="summary-stats-container">
          <SummaryStats weatherData={filteredData} />
        </div>
        <WeatherChart weatherData={filteredData} />
        <Routes>
          <Route path="/" element={<DataList weatherData={filteredData} />} />
          <Route path="/city/:cityName" element={<CityDetail weatherData={weatherData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;