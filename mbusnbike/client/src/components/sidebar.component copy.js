
import React, {Component} from 'react';


export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
            <label>Presets</label>
            <input id="home" type="button" value="Home" onclick="myHome();" />
            <input id="OceanMist" type="button" value="Ocean Mist" onclick="OceanMist();" />
            <input id="home" type="button" value="Markers" onclick="initMap();" />
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <label>Address</label>
             <input id="address" type="text" name="Address" />
             <input id="search" type="button" value="Search" onclick="FindAddress();" />
             <br />
             <label>Directions</label>
             <input id="start" type="text" />
             <input id="end" type="text" /> 
             <input id="directions" type="button" value="Directions" onclick="directions();" />
             <div>
            <label>Mode of Travel: </label>
            <select id="mode" onchange="calcRoute();">
              <option value="DRIVING">Driving</option>
              <option value="WALKING">Walking</option>
              <option value="BICYCLING">Bicycling</option>
              <option value="TRANSIT">Transit</option>
            </select>
            </div>
        </div> 
        )
    }
}