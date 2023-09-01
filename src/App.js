import React,{ useState } from 'react';
import './_App.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchBarResults from './components/SearchBarResults/SearchBarResults';
export default function App(){
   
   const [inputData ,    setInputData] = useState([]);
   const [ actualData ,  setActualData]  = useState("");
   return(
       <div className="App" >
          <div className="search-bar-container">
             <SearchBar  setInputData = {setInputData}  setActualData = {setActualData} />
             {actualData.trim() != '' && <SearchBarResults inputData = {inputData}  /> }
          </div>
       </div>
     );
}