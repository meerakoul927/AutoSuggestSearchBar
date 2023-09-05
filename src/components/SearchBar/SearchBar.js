import React from 'react';
import './_SearchBar.scss';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ onSearchChange }) {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onSearchChange(inputValue); // Send the search value to the parent component (App.js)
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Enter Location, City, Hotel Name ..."
        onChange={handleInputChange}
      />
    </div>
  );
}
