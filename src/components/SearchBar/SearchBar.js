import React, { useState } from 'react';
import './_SearchBar.scss';
import { FaSearch } from 'react-icons/fa';
import data from '../../data/data.json';

export default  function SearchBar({setFilteredData , setInputData}) {

 
  const [input, setInput] = useState("");


  const handleInputChange = (e) => {
    const output = e.target.value;
     setInput(output);
     setInputData(output.toLowerCase());
     const filteredHotels = data.hotels.filter((hotel) => {
      return (
        hotel.title.toLowerCase().includes(output.toLowerCase()) ||
        hotel.address.toLowerCase().includes(output.toLowerCase())
      );
    });
    
    setFilteredData(filteredHotels);
  };

  

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        value={input}
        placeholder = "Enter Location , City , HotelName ..."
        onChange={handleInputChange} 
      />
      
      
    </div>
  );
}