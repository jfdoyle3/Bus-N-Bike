const location="North Providence";
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA";
const data="AddressData(data)";

//FindByAddress(url);
//let data=FindByAddress(url);
//var dInfo=JSON.parse(data);
//console.log(dInfo);
Type(data);
FindByAddress(url);
//var getAResp=AddressData(data);
//console.log(getAResp);

function FindByAddress(url) {

const https=require ('https');

https.get(url, res => {
  let body = "";

  // A chunk of data has been recieved.
  res.on("data", data => {
    body += data;
  });

  // The whole response has been received. Print out the result.
  res.on('end', () => {
    //body=JSON.parse(body);  
    // jsonData=JSON.stringify(body); 
    //console.log(body);
   // console.log(JSON.parse(jsonData));
  return body;
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

};

function AddressData(data){
    var returnThis="This is the return";
    var info=JSON.parse(data);
  console.log(info);
 return returnThis;
}
