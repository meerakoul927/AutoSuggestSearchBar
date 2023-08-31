import React, { useState } from 'react';
import'./_SearchBar.scss';
import { FaSearch } from 'react-icons/fa';
import  data  from '../../data/data.json';

export default function SearchBar() {
  const [input , setInput] = useState("");
   console.log(input);

   const handleInputChange =  (event) => {
    const newItem = event.target.value;
    setInput(newItem);
    console.log(input);
  };


 const fetchData = (input) =>{
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (input === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.title.includes(input);
    }
})
     return filteredData;
 }

  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon"/>

        <input type="text" 
        placeholder = "Enter Location , City , Landmark..."
        value={input} onChange={handleInputChange} />
       
    </div>
  )
}
