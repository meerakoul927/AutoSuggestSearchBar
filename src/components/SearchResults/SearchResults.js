import React from 'react'
import { LuHotel } from 'react-icons/lu';
import './_SearchResults.scss';
import { Link } from 'react-router-dom';

export default function SearchResults({ result }) {
  return (
    <div className="search_hotels_div">
             <LuHotel/>
             <p>{result.title}
          
             <Link to="/details/result.address"><span>{result.address}</span></Link>
             </p>
             
    </div>
  )
}