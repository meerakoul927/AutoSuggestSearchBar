import React from 'react';
import './_SearchBarResults.scss';
import data from '../../data/data.json';
import SearchBarLocation from '../SearchBarLocation/SearchBarLocation';
import SearchBarHotel from '../SearchBarHotels/SearchBarHotel';

export default function SearchBarResults(props) {

  const filteredData = props.filteredData;
  const inputData = props.inputData;
 
  const filteredLocation = data.hotels.filter((hotel,index,self) => {
    return (
      hotel.address.toLowerCase().includes(inputData) &&
      self.findIndex((h) => h.address.toLowerCase() === hotel.address.toLowerCase()) === index
    );
  });
  

  return (
    
    <div className="filtered-result-list">
        
   <SearchBarLocation filteredLocation = { filteredLocation }/>
      <SearchBarHotel filteredData = {filteredData} />
     
    
    </div>
  )
}