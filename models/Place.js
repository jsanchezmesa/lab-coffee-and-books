const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema( {
  name: String,
  description: String,
  type: {type: String, enum:["Coffee","Book"]},
  location: { type: {type:String}, coordinates: [Number] }
});
placeSchema.index({location:"2dsphere"});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;