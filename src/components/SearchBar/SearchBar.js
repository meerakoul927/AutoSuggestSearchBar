import React, { useState } from 'react';
import './_SearchBar.scss';
import { FaSearch } from 'react-icons/fa';
import data from '../../data/data.json';

export default  function SearchBar({setFilteredData}) {

 
  const [input, setInput] = useState("");


  const handleInputChange = (e) => {
    const output = e.target.value.toLowerCase();
     setInput(output);
    
     const filteredHotels = data.hotels.filter((hotel) => {
      return (
        hotel.title.toLowerCase().includes(output) ||
        hotel.address.toLowerCase().includes(output)
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
        placeholder = "Enter Location , City , Landmark..."
        onChange={handleInputChange} 
      />
      
      
    </div>
  );
}


