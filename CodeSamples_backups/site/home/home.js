const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");



// GET: test
//
// Public
router.get("/test", (req, res) => res.json({ success: "home Works" }));

module.exports=router;