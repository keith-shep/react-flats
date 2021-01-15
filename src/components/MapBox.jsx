import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const MapBox = () => {
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(2);

  const buildMap = () => {
    mapboxgl.accessToken = process.env.MAXBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: 'mapbox-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [34, 75],
      zoom: 9,
    });
  };

  useEffect(() => {
    buildMap();
  }, []);

  return (
    <div className="map-container">
      <div id="mapbox-container" />
    </div>
  );
};

export default MapBox;
