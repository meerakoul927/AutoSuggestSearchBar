import React,{ useState } from 'react';
import './_App.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchBarResults from './components/SearchBarResults/SearchBarResults';
export default function App(){

   const [filteredData , setFilteredData] = useState([]);
   const [inputData ,    setInputData] = useState([]);
   return(
       <div className="App" onClick={() => setShowResults(false)}>
          <div className="search-bar-container">
            <SearchBar setFilteredData = {setFilteredData} setInputData = {setInputData} />
            <SearchBarResults filteredData = {filteredData} inputData = {inputData}  />
          </div>
       </div>
     );
}