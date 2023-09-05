import React from 'react';
import {MdLocationPin} from 'react-icons/md';
import './_SearchLocation.scss';

export default function SearchLocation({output}) {
  return (
    <div className="search_location_div">
         <MdLocationPin/>
         <p>{output.address}</p>
        <Link to="/details/output.address"><p>{output.address}</p></Link>
    </div>
  )
}
