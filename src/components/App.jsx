import React from 'react';
import FlatList from './FlatList';
import flats from '../../data/flat';
import MapBox from './MapBox';

const App = () => {
  return (
    <>
      <div>
        <FlatList flats={flats} />
        <MapBox />
      </div>
    </>
  );
};

export default App;
