let express = require("express");
let model = require("../models/guest-model");
let router = express.Router();

//restrict
router.get("/guests", async (req, res, next) => {
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

//restrict
router.post("/guest", async (req, res, next) => {
  try {
    let guestId = req.params.id;
    let guest = { ...req.body, id: guestId };

    model.addGuest(guest);
    then((guest) => {
      res.status(201).json({
        message: "Guest Created",
      });
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "There was an error creating a potluck." });
  }
});

//restrict
router.delete("/guests/:id", async (req, res, next) => {
  try {
    model
      .deleteGuest(req.params.id)
      .then(() => {
        res.status(200).json({
          message: "User Deleted",
        });
      })
      .catch(next);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
