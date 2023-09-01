import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
export default function SearchBarHotel({filteredData}) {
  return (
    <>
    {
        filteredData.length>0 && <p className="location_title">Hotels</p>
     }
    {
              filteredData.map((result) => {
              return <SearchResults result = {result}/>
          })
    }
    </>
  )
}
