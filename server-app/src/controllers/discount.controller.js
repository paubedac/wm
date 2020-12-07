const Discount = require("../db/models/discount.model");

const getAllDiscounts = async (req, res) => {
  Discount.find({}, function(err, result) {
     if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
  });
}

const getDiscount = async (req, res) => {
  Discount.find({brand: req.params.brand}, function(err, result) {
     if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
  });
}

module.exports = { 
  getAllDiscounts,
  getDiscount
}