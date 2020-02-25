import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';


class App extends Component {
  state = {
    lat: 41.87092932,
    lng: -71.42788283,
    zoom: 13,
  }

  render(){
    const position = [this.state.lat, this.state.lng]
  return (
    <Map className="map" center={position} zoom={this.state.zoom}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </Map>
  );
 }
}
export default App;
