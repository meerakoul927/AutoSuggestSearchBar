import React from 'react';
import './_SearchBarResults.scss';
import SearchBarLocation from '../SearchBarLocation/SearchBarLocation';
import SearchBarHotel from '../SearchBarHotels/SearchBarHotel';

export default function SearchBarResults({ locations, hotels }) {
  return (
    <div className="filtered-result-list">
      {locations.length > 0 && <SearchBarLocation locations={locations} />}
      {hotels.length > 0 && <SearchBarHotel hotels={hotels} />}
      
    </div>
  );
}
