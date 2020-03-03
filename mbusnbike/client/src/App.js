import React from 'react';
import {Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {Icon} from "leaflet";
import "./App.css";

export default function App(){
  return <Map center={[41.8239891,-71.4128343]} zoom={15}>
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
    zoomControl={false};
    />
  </Map>
}