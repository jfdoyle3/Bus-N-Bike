const router = require('express').Router();

router.get("/", (req, res, next)=>{
   res.send('GET /');
  // res.json({message: '/'});
   console.log('/');
   next();
});

router.get("/:place", (req,res)=>{
  //var geoLocate=JSON.stringify(req.query.place);
  console.log(req.params.place);
 // res.json({message: 'geoLocate'});
  res.send('Response send to client= '+req.params.place);
});


module.exports = router;