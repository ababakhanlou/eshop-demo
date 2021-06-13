const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    availQty: {
      type: Number,
      required: true,
    },
  },
  { collection: "shoppingstock" }
);

module.exports = mongoose.model("shoppingstock", stockSchema);
