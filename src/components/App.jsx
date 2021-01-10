import React from 'react';
import FlatList from './FlatList.jsx';
import flats from '../../data/flat.js'

const App = () => {
  return (
    <>
      <div className="left-side bg-primary h-100 flex-grow-1">
        <FlatList flats={flats} />
      </div>
      <div className="right-side bg-secondary h-100 flex-grow-1">
        Right Side
      </div>
    </>
  );
};

export default App;
