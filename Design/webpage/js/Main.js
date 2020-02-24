let map;
let markers;
let bounds;

function initMap()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center:new google.maps.LatLng(41.87092932,-71.42788283),
    zoom: 8
  });

  fetch('../json/HomeBusStops.json')
    .then(function(response){return response.json()})
    .then(plotMarkers);
}



function plotMarkers(mark)
{
  markers = [];
  bounds = new google.maps.LatLngBounds();

  mark.forEach(function (marker) {
    let position = new google.maps.LatLng(marker.stop_lat, marker.stop_lon);

    markers.push(
      new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      })
    );

    bounds.extend(position);
  });

  map.fitBounds(bounds);
}

