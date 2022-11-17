const https = require('https');

findAddress = (address)=> {
  return new Promise( (resolve, reject) => {
   https.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA', (res) => {
       var body = "";

      res.on('data', (chunk)=> {
        body += chunk;
      });

      res.on('end',()=> {
        resolve( JSON.parse(body) );
      });

    }).on('error', reject);
  });
}

module.exports.findAddress = findAddress;