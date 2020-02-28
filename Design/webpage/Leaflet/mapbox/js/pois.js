function OceanMist(){
  const ocaeanMistGPS=[41.3743224,-71.5454094];
  mapBox.setView(ocaeanMistGPS, 18);
  let markOceanMist = L.marker(ocaeanMistGPS)
                       .bindPopup("<b>Ocean Mist</b><br>It's the place to <a href='https://www.oceanmist.net/'>Be</a>!!!")           
                       .addTo(mapBox);
};

function Home(){
  let homeGPS=[41.87092932,-71.42788283];
  mapBox.flyTo(homeGPS, 18);
  let markHome = L.marker(homeGPS)
                  .bindPopup("<b>Home</b><br>I am Home.")
                  .addTo(mapBox);

};

function Location(){
  $(".leaflet-marker-icon").remove(); // works but doesn't remove shadow map
  $(".leaflet-popup").remove();  // works
  let locationGPS=[];
  let lat = document.getElementById("latitude").value;
  let lng = document.getElementById("longitude").value;
  locationGPS.push(lat);
  locationGPS.push(lng);
  mapBox.flyTo(locationGPS, 13);
  let markLocation = L.marker(locationGPS)
                      .bindPopup("Your Input: " + locationGPS.toString())
                      .addTo(mapBox);
}

function CustomMarkerLocation(){
  const greenIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  let locationGPS=[];
  let lat = document.getElementById("latitude").value;
  let lng = document.getElementById("longitude").value;
  locationGPS.push(lat);
  locationGPS.push(lng);
  mapBox.flyTo(locationGPS, 13);
  let markLocation = L.marker(locationGPS,{icon: greenIcon})
                      .bindPopup("Your Input: " + locationGPS.toString())
                      .addTo(mapBox);
}

function FindAddress(){
  let input= document.getElementById("search").value;
  console.log("Find Address function called: "+input);
}