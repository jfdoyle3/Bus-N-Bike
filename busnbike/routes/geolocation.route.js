const router = require('express').Router();

router.get("/", (req, res)=>{  
  res.json({message: 'geolocation'});
});


module.exports = router;