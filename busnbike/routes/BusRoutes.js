const express = require('express'),
      router=express.Router(),
      BusRoutesModel = require('../models/');


router.get("/" ,(req,res) => {
  res,send("This is the Bus Routes");
});

// router.get('/favplace', async (req, res) => {
//   const myFavs = await favPlceModel.find({});

//   try {
//     res.send(myFavs);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// router.post('/favplace', async (req, res) => {
//     const favorites = new favPlceModel(req.body);
  
//     try {
//       await favorites.save();
//       res.send(favorites);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

module.exports = router;