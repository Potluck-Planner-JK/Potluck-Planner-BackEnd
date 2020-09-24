let express = require("express");
let model = require("../models/guest-model");
let restrict = require("../../restrict");
let router = express.Router();

//restricted
router.get("/guests", restrict.restrict(), async (req, res, next) => {
  try {
    res.json(await model.findGuests());
  } catch (err) {
    next(err);
  }
});

//restricted
router.post("/guest", restrict.restrict(), async (req, res, next) => {
  try {
    let { name, email, item } = req.body;

    let newGuest = await model.addGuest({
      name,
      email,
      item,
    });

    res.status(201).json(newGuest);
  } catch (err) {
    next(err);
  }
});

//restrict
router.put("/guests/:id", restrict.restrict(), (req, res) => {
  const id = req.params.id;
  model
    .updateGuest(id, req.body)
    .then((guest) => {
      res.status(200).json({ message: "Successfully Updated Guest", guest });
    })
    .catch((err) => {
      console.log(err, "Error: ");
      res.status(500).json({ message: "Could Not Update Guest" });
    });
});

//restricted
router.delete("/guests/:id", restrict.restrict(), async (req, res, next) => {
  try {
    model
      .deleteGuest(req.params.id)
      .then(() => {
        res.status(200).json({
          message: "Guest Deleted",
        });
      })
      .catch(next);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
