const router = require('express').Router();

router.get("/", (req, res)=>{  
  res.json({message: 'Home route'});
});


module.exports = router;