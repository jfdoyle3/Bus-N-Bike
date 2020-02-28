//
// place a default marker at GPS coors
//
// var marker = L.marker([41.871315,-71.427164]).addTo(mymap);
//
// Make Circle on map, center on GPS coors and give radius
//
// var circle = L.circle([41.870756,-71.42622], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 50
// }).addTo(mymap);
//
// Make a Polygon on map
//
// var polygon = L.polygon([
//     [41.873361,-71.42784],
//     [41.872231,-71.42695],
//     [41.872261,-71.428355]
// ]).addTo(mymap);
//
// Bind popup to objects
//
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
// 
//   Pop up on GPS location on map
//
// var popup = L.popup()
//     .setLatLng([41.869647,-71.425761])
//     .setContent("Trump's")
//     .openOn(mymap);