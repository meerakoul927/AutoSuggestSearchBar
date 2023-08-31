import React from 'react'
import { LuHotel } from 'react-icons/Lu';
import './_SearchResults.scss';

export default function SearchResults({ result }) {
  return (
    <>
             <LuHotel/>
             <p>{result.title}
             <span>{result.address}</span>
             </p>
             
    </>
  )
}
