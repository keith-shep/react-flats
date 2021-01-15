import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map = (props) => {
  return (
    <div className="map-container">
      <ReactMapGL
        latitude={props.activeFlat.lat}
        longitude={props.activeFlat.lng}
        zoom={10}
        width="100%"
        height="100%"
        // onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken=""
      />
    </div>
  );
};

export default Map;
