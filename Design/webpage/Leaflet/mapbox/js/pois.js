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

function Location(lat,lng){
    let locationGPS=[];
    let lat = document.getElementsById("latitude").value;
    let lng = document.getElementsById("longtitude").value;
    
    locationGPS.push(lat);
    locationGPS.push(lng);
    console.log("lat"+locationGPS[0]);
    console.log("lng"+locationGPS[1]);


}