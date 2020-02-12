const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  // Create Schema
  favTripSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    startlocation: {
      type: String,
      required: true
    },
    endlocation: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = favTrip = mongoose.model("favTrip", favTripSchema);