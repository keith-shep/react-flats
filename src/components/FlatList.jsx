import React from 'react';
import Flat from './Flat';

const FlatList = ({ flats }) => {
  return (
    <>
      <div className="flat-list">
        {flats.map(flat => <Flat flat={flat} />)}
      </div>
    </>
  );
};

export default FlatList;
