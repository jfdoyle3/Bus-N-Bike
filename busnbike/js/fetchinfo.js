 const fetch=require('node-fetch');

 fetchInfo =() =>{
   fetch('http://localhost:5050')
        .then(res=> res.send( JSON.parse(body)))
        .catch((err)=>{
            console.log(err);
        })
}

module.exports.fetchInfo= fetchInfo;