var mongoose = require("mongoose");

var PizzaSchema = new mongoose.Schema({
  name: String,
  price: Number
});

var pizzaMongooseModel = mongoose.model("Pizza", PizzaSchema);

module.exports = pizzaMongooseModel;
