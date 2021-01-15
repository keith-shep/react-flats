import React, { useState } from 'react';
import SAMPLE_FLATS from '../../data/flat';
import FlatList from './FlatList';
import MapBox from './MapBox';

const App = () => {
  const [flats, setFlats] = useState(SAMPLE_FLATS);
  const [activeFlat, setActiveFlat] = useState(flats[0]);


  const selectFlat = (index) => {
    // console.log(flats[index]);
    setActiveFlat(flats[index]);
  };

  return (
    <>
      <div>
        <FlatList flats={flats} activeFlat={activeFlat} selectFlat={selectFlat} />
        <MapBox lat={activeFlat.lat} lng={activeFlat.lng} />
      </div>
    </>
  );
};

export default App;
