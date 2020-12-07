const Product = require("../db/models/product.model");

const getAllProducts = async (req, res) => {
  Product.find({}, function(err, result) {
     if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
  });
}

module.exports = { getAllProducts}