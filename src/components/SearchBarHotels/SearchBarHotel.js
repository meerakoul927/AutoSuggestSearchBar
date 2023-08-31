import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
export default function SearchBarHotel({filteredData}) {
  return (
    <>
    {
        filteredData.length>0 && <h4 className="location_title">Hotels</h4>
     }
    {
              filteredData.map((result) => {
              return <SearchResults result = {result}/>
          })
    }
    </>
  )
}
