import React,{ useState } from 'react';
import './_App.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchBarResults from './components/SearchBarResults/SearchBarResults';
export default function App(){

   const [filteredData , setFilteredData] = useState([]);
   
     return(
       <div className="App">
          <div className="search-bar-container">
            <SearchBar setFilteredData = {setFilteredData} />
            <SearchBarResults filteredData = {filteredData} />
          </div>
       </div>
     );
}
