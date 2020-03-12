const location="North Providence";
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA";
//const data="AddressData(data)";

//FindByAddress(url);
 //var data=FindByAddress(url);
//var dInfo=JSON.parse(data);
// process.stdout.write(data);
// console.log(data);
//FindByAddress(url);
//var getAResp=AddressData(data);
//console.log(getAResp);


var a=function FindByAddress(url) {
  const https = require('https');

  https.get(url, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
  
    res.on('data', (d) => {
     // process.stdout.write(d);
      return d;
    });
  
  }).on('error', (e) => {
    console.error(e);
  });
  
}

console.log(a);
// function FindByAddress(url) {

// const https=require ('https');

// https.get(url, res => {
//   let jsonData = "";

//   // A chunk of data has been recieved.
//   res.on("data", chunk => {
//     jsonData += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   res.on('end', () => {
//     //var data=JSON.parse(jsonData);  
//    var jData=JSON.stringify(body); 
//   //console.log(jsonData);
//    // console.log(JSON.parse(jsonData));
//    var jString={ message: "trying return json data"};
//    var string="trying return json data";
  
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// return string;
// };

function AddressData(data){
    var returnThis="This is the return";
    var info=JSON.parse(data);
  console.log(info);
 return returnThis;
}
