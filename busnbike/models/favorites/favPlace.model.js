const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  // Create Schema
  FavPlaceSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  });

module.exports = favPlace = mongoose.model("favPlace", FavPlaceSchema);