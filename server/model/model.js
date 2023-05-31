const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  no:{
    type: String,
    minlength: 3,
    maxLength: 15,
  },
  name: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: String,
  },
  color: {
    type: String,
  },
  rcNo: {
    type: String,
  },
});

const CarSchema = mongoose.model("car", carSchema);
module.exports = CarSchema;