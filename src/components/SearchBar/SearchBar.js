import React, { useState } from 'react';
import './_SearchBar.scss';
import { FaSearch } from 'react-icons/fa';


export default  function SearchBar({ setInputData ,  setActualData }) {

  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    const output = e.target.value;
     setInput(output);
     setActualData(output.toLowerCase())
     setInputData(output.toLowerCase());
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