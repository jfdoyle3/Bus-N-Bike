const location="North Providence";
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA";



FindByAddress(url);


function FindByAddress(url) {

const https=require ('https');

https.get(url, res => {
  let body = "";


  res.on("data", data => {
    body += data;
  });

  res.on('end', () => {
    body=JSON.parse(body);  

    console.log(body);
  
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

};

function AddressData(){
    let info="This is the return";
  console.log(info);
}
