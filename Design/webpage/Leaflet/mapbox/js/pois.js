function OceanMist(){
    let ocaeanMistGPS=[41.3743224,-71.5454094];
    riMap.setView(ocaeanMistGPS, 18);
    let markOceanMist = L.marker(ocaeanMistGPS)
                         .bindPopup("<b>Ocean Mist</b><br>It's the place to <a href='https://www.oceanmist.net/'>Be</a>!!!")           
                         .openPopup()
                         .addTo(riMap);
};

function Home(){
    let homeGPS=[41.87092932,-71.42788283];
    riMap.flyTo(homeGPS, 18);
    let markHome = L.marker(homeGPS)
                    .bindPopup("<b>Home</b><br>I am Home.")
                    .openPopup()
                    .addTo(riMap);

};

function Location(){
    let locationGPS=[];
    let lat = document.getElementById("latitude").value;
    let lng = document.getElementById("longitude").value;
    locationGPS.push(lat);
    locationGPS.push(lng);
    riMap.flyTo(locationGPS, 18);
    let markLocation = L.marker(locationGPS)
                        .bindPopup("Your Input: " + locationGPS.toString())
                        .openPopup()
                        .addTo(riMap);
}