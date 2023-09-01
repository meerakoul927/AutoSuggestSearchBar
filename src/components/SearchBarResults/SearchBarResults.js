import React from 'react';
import './_SearchBarResults.scss';
import data from '../../data/data.json';
import SearchBarLocation from '../SearchBarLocation/SearchBarLocation';
import SearchBarHotel from '../SearchBarHotels/SearchBarHotel';

export default function SearchBarResults(props) {

   const inputData = props.inputData;

  const filteredLocation = data.hotels.filter((hotel,index,self) => {
    return (
      hotel.address.toLowerCase().includes(inputData) &&
      self.findIndex((h) => h.address.toLowerCase() === hotel.address.toLowerCase()) === index
    );
  });

  const filteredData = data.hotels.filter((hotel) => {
    return (
      hotel.title.toLowerCase().includes(inputData) ||
      hotel.address.toLowerCase().includes(inputData)
    );
  });


  return (
    <div className="filtered-result-list">
    {filteredLocation.length > 0 || filteredData.length > 0 ? (
      <>
        <SearchBarLocation filteredLocation={filteredLocation} />
         <SearchBarHotel filteredData={filteredData} />
      </>
    ) : (<p className="no_data">No data Found</p>)
  }
    </div>
  )
}
