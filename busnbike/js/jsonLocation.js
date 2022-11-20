const http = require('http');

jsonLocation = ()=> {
  return new Promise( (resolve, reject) => {
   http.get('http://localhost:5050', (res) => {
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

module.exports.jsonLocation= jsonLocation;