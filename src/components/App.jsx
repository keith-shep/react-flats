import React, { useState } from 'react';
import SAMPLE_FLATS from '../../data/flat';
import FlatList from './FlatList';
import MapBox from './MapBox';

const App = () => {
  const [flats, setFlats] = useState(SAMPLE_FLATS);
  const [activeFlat, setActiveFlat] = useState(flats[3]);

  const selectFlat = (index) => {
    setActiveFlat(flats[index]);
  };

  return (
    <>
      <div>
        {console.log(process.env.DB_PASS)}
        <FlatList flats={flats} activeFlat={activeFlat} selectFlat={selectFlat} />
        <MapBox
          // lat={activeFlat.lat}
          // lng={activeFlat.lng}
          activeFlat={activeFlat}
          // token={}
        />
      </div>
    </>
  );
};

export default App;
