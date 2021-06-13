const express = require("express");
const router = express.Router();
const Stock = require("./models/stock");
const cors = require("cors");

router.get("/", async (req, res) => {
  try {
    const stock = await Stock.find({});
    res.send(stock);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/update/:id", cors(), async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };
    console.log("*update*", id, req.body, options);
    const result = await Stock.findByIdAndUpdate(id, updates, options);
    res.send(result);
    console.log("*updated*", result);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
