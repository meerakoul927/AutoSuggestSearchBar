import React from 'react'
import { LuHotel } from 'react-icons/Lu';
import './_SearchResults.scss';

export default function SearchResults({ result }) {
  return (
    <div className="search_hotels_div">
             <LuHotel/>
             <p>{result.title}
             <span>{result.address}</span>
             </p>
             
    </div>
  )
}