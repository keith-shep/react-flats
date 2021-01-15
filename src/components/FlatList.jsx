import React from 'react';
import Flat from './Flat';

const FlatList = ({ flats, selectFlat, activeFlat }) => {
  return (
    <>
      <div className="flat-list">
        {flats.map(flat => <Flat key={flat.id} flat={flat} activeFlat={activeFlat} selectFlat={selectFlat} index={flat.id}/>)}
      </div>
    </>
  );
};

export default FlatList;
