import React, { useState, useEffect } from 'react';
import './_App.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchBarResults from './components/SearchBarResults/SearchBarResults';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from './components/DetailsPage/DetailsPage.js';

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [locations, setLocations] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Make an API call based on searchValue
    const fetchData = async () => {
      console.log('Search Value:', searchValue);
      try {
        if (searchValue.trim() !== "") {
          // Fetch locations based on the searchValue
          const locationResponse = await axios.get(`http://localhost:3001/api/locations/${searchValue}`);
          setLocations(locationResponse.data);

          // Fetch hotels based on the searchValue
          const hotelResponse = await axios.get(`http://localhost:3001/api/hotels/${searchValue}`);
          setHotels(hotelResponse.data);
        } else {
          // Clear the results if searchValue is empty
          setLocations([]);
          setHotels([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar onSearchChange={setSearchValue} />
        <SearchBarResults locations={locations} hotels={hotels} />
      </div>
     
    </div>
  );
}
