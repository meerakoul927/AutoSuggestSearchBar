import React from 'react';
import SearchLocation from '../SearchLocation/SearchLocation';
import './_SearchBarLocation.scss';
    
export default function SearchBarLocation({filteredLocation}) {
  return (
    <>
    {
        filteredLocation.length>0 && <p className="location_title">Locations</p>
     }
    {
       filteredLocation.map((output) => {
           return <SearchLocation output = {output} /> 
      })
     }
    </>
  )
}
