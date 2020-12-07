const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  brand: {
    type: String
  },
  discount: {
    type: Number
  },
  threshold: {
    type: Number
  }
});

module.exports = mongoose.model("discount", discountSchema);