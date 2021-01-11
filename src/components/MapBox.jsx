import React, { useState, useEffect, Component } from 'react';
import mapboxgl from 'mapbox-gl';

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }
  
  componentDidMount() {
    mapboxgl.accessToken = process.env.MAXBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div className="map-container ">
        <div ref={el => this.mapContainer = el} className="h-100" />
      </div>
    );
  }
};

export default MapBox;
