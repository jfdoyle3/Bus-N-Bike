const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  // Create Schema
 GeoLocate = new Schema({
    id: String,
    place_name: String,
    center: [{
     lng: Number,
     lat: Number
    }],
  });

module.exports = GeoLocate = mongoose.model("GeoLocate", FavPlaceSchema);