const location="North Providence";
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA";



var jdata=FindByAddress(url);
var pData=JSON.parse(jdata);
console.log(pData);
//const data="AddressData(data)";

FindByAddress(url);



// function FindByAddress(url) {
//   const https = require('https');

//   https.get(url, (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', resonsole.log(jdata);.headers);
  
//     res.on('data', () => {
//      // process.stdout.write(d);
      
//     });
  
//   }).on('error', (e) => {
//     console.error(e);
//   });
  
// }


function FindByAddress(url) {

const https=require ('https');

https.get(url, res => {
  let jsonData = {};

  // A chunk of data has been recieved.
  res.on("data", chunk => {
    jsonData+=chunk;
  });

  // The whole response has been received. Print out the result.
  res.on('end', () => {
    // var parData=JSON.parse(jsonData); 
    // //var  data = JSON.stringify(jsonData);
    // console.log(parData.features.text);
    jsonData=Buffer.concat(jsonData).toString();
    return jsonData;
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


};

function AddressData(){
    let info="This is the return";
  console.log(info);
}
