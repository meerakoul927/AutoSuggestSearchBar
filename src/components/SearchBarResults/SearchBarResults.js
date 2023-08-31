import React from 'react';
import './_SearchBarResults.scss';
import SearchResults from '../SearchResults/SearchResults';

export default function SearchBarResults(props) {

  const filteredData = props.filteredData;
  console.log(filteredData);

  return (
    <div className="filtered-result-list">
        
         {
          <h1> Hotels </h1> && 
           filteredData.map((result) => {
              return <div><SearchResults result = {result} /></div>
          })
         }
        
    </div>
  )
}
