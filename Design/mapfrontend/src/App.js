// import React from 'react';
// import './App.css';

// const Map=require('./map.component');

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <p> boo! </p>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('https://api.mapbox.com/styles/v1/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;