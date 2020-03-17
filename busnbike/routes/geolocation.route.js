const router = require('express').Router();

router.get("/", (req, res)=>{  
  res.json({message: 'geolocation'});
});

router.get("/place", (req,res)=>{
  res.json({message: 'loc/places'});
});


module.exports = router;