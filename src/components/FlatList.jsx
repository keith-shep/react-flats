import React from 'react';
import Flat from './Flat.jsx'

const FlatList = ({ flats }) => {
  return (
    <>
      {flats.map(flat => <Flat flat={flat} />)}
    </>
  )
}

export default FlatList;
