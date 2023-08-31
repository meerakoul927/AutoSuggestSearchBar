import React from 'react';
import './_App.scss';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchBarResults from './components/SearchBarResults/SearchBarResults';
export default function App(){
     return(
       <div className="App">
          <div className="search-bar-container">
            <SearchBar/>
            <SearchBarResults/>
          </div>
       </div>
     );
}
