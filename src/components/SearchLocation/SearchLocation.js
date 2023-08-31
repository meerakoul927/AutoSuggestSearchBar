import React from 'react';
import {MdLocationPin} from 'react-icons/Md';
import './_SearchLocation.scss';

export default function SearchLocation({output}) {
  return (
    <div className="search_location_div">
         <MdLocationPin/>
         <p>{output.address}</p>
    </div>
  )
}
