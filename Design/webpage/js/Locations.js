
function OceanMist()
{
    let mapProp= {
      center:new google.maps.LatLng(41.3743224,-71.5454094),
      zoom:20,
    };
    let map = new google.maps.Map(document.getElementById("map"),mapProp);
    
}

function myHome()
{
      let homeAddress= {
       
        center:new google.maps.LatLng(41.87092932,-71.42788283),
        zoom:20,
      };
      let map = new google.maps.Map(document.getElementById("map"),homeAddress);
}
function FindAddress()
{
    let geocoder = new google.maps.Geocoder();
  let address = document.getElementById("address").value;

    console.log(address);
    geocoder.geocode( { 'address': address}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK) {
      let lat=results[0].geometry.location.lat();
      let lng=results[0].geometry.location.lng();
      console.log(results[0].geometry.location.lat());
      console.log(results[0].geometry.location.lng());
      let mapProp= {
      center:new google.maps.LatLng(lat,lng),
      zoom:20,
    };
    let map = new google.maps.Map(document.getElementById("map"),mapProp);
       } else {
      alert('Geocode was not successful for the following reason: ' + status);
      }
    });
   
}
  