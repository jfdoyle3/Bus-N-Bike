const router = require('express').Router();

router.get("/", (req, res)=>{  
  res.json({message: 'Bus route'});
});


module.exports = router;