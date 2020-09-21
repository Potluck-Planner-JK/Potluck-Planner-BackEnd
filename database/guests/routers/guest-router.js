let express = require("express");
let model = require("../models/guest-model");
let restrict = require("../../restrict")
let router = express.Router();

//restricted
router.get("/guests", restrict.restrict(), async (req, res, next) => {
  try {
    res.json(await model.findGuests());
  } catch (err) {
    next(err);
  }
});

// //restrict
// router.get("/guest/:id", async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err);
//   }
// });

//restricted
router.post("/guest", restrict.restrict(), async (req, res, next) => {
  try {
    let { name, email, item} = req.body;

    // let guest = await model.findBy({ name }).first();

    // if (guest) {
    //   return res.status(409).json({
    //     message: "Name is Already Taken",
    //   });
    // }

    let newGuest = await model.addGuest({
      name,
      email,
      item
    });

    res.status(201).json(newGuest);
  } catch (err) {
    next(err);
  }
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
