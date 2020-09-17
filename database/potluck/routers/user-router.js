let express = require("express");
let bcrypt = require("bcryptjs");
let model = require("../models/user-model");
let router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let potluck = await model.findBy({ username }).first();

    if (potluck) {
      return res.status(409).json({
        message: "Username is Already Taken",
      });
    }
    let newPotluck = await model.addPotluck({
      password, //create token / complexity by 14
    });
    res.status(201).json(newPotluck);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let user = await model.findBy({ username }).first();

    if (!user) {
      return res.status(401).json({
        message: "Username or Password Invalid",
      });
    }

    let validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(401).json({
        message: "Username or Password Invalid",
      });
    }
  } catch (err) {
    next(err);
  }
});

//restrict
router.get("/potlucks", async (req, res, next) => {
  try {
    res.json(await model.findPotlucks());
  } catch (err) {
    next(err);
  }
});

//restrict
router.delete("/potluck/:id", async (req, res, next) => {
  try {
    model
      .deletePotluck(req.params.id)
      .then(() => {
        res.status(200).json({
          message: "Potluck Account Deactivated",
        });
      })
      .catch(next);
  } catch (err) {
    next(err);
  }
});

//restrict
router.get("/logout", (req, res) => {
  if (req.header.token) {
    req.header.token.destroy((err) => {
      if (err) {
        res.status(500).json({ message: "Failed to Logout" });
      } else {
        res.status(200).json({ message: "Successfully Logged Out" });
      }
    });
  } else {
    res.status(200).json({ message: "You Have Successfully Logged Out" });
  }
});

module.exports = router;
