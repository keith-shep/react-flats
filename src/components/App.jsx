import React from 'react';
import FlatList from './FlatList';
import flats from '../../data/flat';
import GoogleMapReact from './GoogleMapReact';

const App = () => {
  return (
    <>
      <div>
        <FlatList flats={flats} />
        <GoogleMapReact />
      </div>
    </>
  );
};

export default App;
