const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number },
  brand: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model("product", productSchema);