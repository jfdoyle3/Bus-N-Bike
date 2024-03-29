const router = require('express').Router(),
      addressJSON=require('../js/address'),
      locationData=require('../js/jsonLocation');
      fetchInfo=require('../js/fetchinfo');

router.get("/", (req, res)=>{
  // res.send('GET /');
  res.json({message: '/'});
  console.log('/');
});

router.get("/address/:address", (req,res)=>{
  console.log(req.params.address);
  //res.json({center: req.params.xyz});
addressJSON.findAddress(req.params.address)
           .then((data)=>{
           res.send(JSON.stringify(data));
           // res.JSON(data);
            })
           .catch((err)=>{
              console.log(err);
            });
  
});

router.get("/static/:dummyInput", (req,res)=>{
  console.log(req.params.dummyInput);
  //res.json({center: req.params.xyz});
locationData.jsonLocation()
           .then((data)=>{
              //console.log(data);
              //res.JSON(data);
              res.send(JSON.stringify(data));
            })
           .catch((err)=>{
              console.log(err);
            });
  
 
});

router.get("/fetchinfo/:fetchInput", (req,res)=>{
  console.log(req.params.fetchInput);
  //res.json({center: req.params.xyz});
fetchInfo.fetchInfo()
           .then((data)=>{
              //console.log(data);
             // res.JSON(data);
             res.send(JSON.stringify(data));
            })
           .catch((err)=>{
              console.log(err);
            });
  
 
});

// router.get("/place", (req,res)=>{
//  // var geoLocate=JSON.stringify(req.params.qplace);
//   console.log(req.query.qplace);
//   //console.log(geoLocate);
//   //res.json({message: 'qPlace'});
//  // res.send('Response send to client= '+req.params.place);
// });

module.exports = router;



// entire query: https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA
  // Breakdown:https://api.mapbox.com/geocoding/v5/mapbox.places
  // URL: / WHERE . json
  // token: ?access_token=pk.eyJ1IjoiamZkb3lsZTMiLCJhIjoiY2s2bGpwdTM3MGNoNjNsbzZkaHRxZGxxbCJ9.qoUulrGgoNG2qLQENJG3IA