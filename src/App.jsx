import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataList from './components/DataList';
import SummaryStats from './components/SummaryStats';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import './index.css';

const API_KEY = '75ec7eb2980b4eaf9f227afa4360390a';
const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Fetch weather data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?city=Raleigh,NC&key=${API_KEY}`);
        
        // Manually add more mock data for visualization purposes
        const mockData = [
          { city_name: "New York", temp: 75, rh: 50, weather: { description: "Partly cloudy" } },
          { city_name: "Los Angeles", temp: 80, rh: 40, weather: { description: "Sunny" } },
          { city_name: "Chicago", temp: 60, rh: 65, weather: { description: "Cloudy" } },
          { city_name: "Miami", temp: 85, rh: 70, weather: { description: "Clear" } },
          { city_name: "Denver", temp: 68, rh: 30, weather: { description: "Rainy" } },
        ];

        const fullData = [...response.data.data, ...mockData]; // Combine real data with mock data
        setWeatherData(fullData);
        setFilteredData(fullData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Apply search and filters
  useEffect(() => {
    const filtered = weatherData
      .filter(item => item.city_name.toLowerCase().includes(searchTerm.toLowerCase()))
      // Add filter logic here, if required
      // .filter(item => filters logic)
    setFilteredData(filtered);
  }, [searchTerm, filters, weatherData]);

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Dashboard</h1>
      
      <div className="search-filter-container">
        <SearchBar setSearchTerm={setSearchTerm} />
        <FilterOptions setFilters={setFilters} />
      </div>

      <div className="summary-stats-container">
        <SummaryStats weatherData={filteredData} />
      </div>

      <DataList weatherData={filteredData} />
    </div>
  );
};

export default App;