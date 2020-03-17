const router = require('express').Router();


router.get("/", (req, res, next)=>{
   res.send('GET /');
  // res.json({message: '/'});
   console.log('/');
   next();
});

router.get("/:addressZoom", (req,res, next)=>{
  let coorZoom=req.params.addressZoom.split(",");
  console.log(coorZoom[0]);
  //res.json({center: req.params.xyz});

  next();
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