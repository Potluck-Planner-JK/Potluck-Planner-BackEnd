let express = require("express");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
let model = require("../models/user-model");
let restrict = require("../../restrict");
let router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    let { username, password, date, location } = req.body;
    let potluck = await model.findBy({ username }).first();

    if (potluck) {
      return res.status(409).json({
        message: "Username is Already Taken",
      });
    }

    let newPotluck = await model.addPotluck({
      username,
      password: await bcrypt.hash(password, 14),
      date,
      location,
    });

    res.status(201).json(newPotluck);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await model.findBy({ username }).first();

    console.log(user.username, user.password, "Stored User");
    console.log(username, password, "User inputs");

    if (!user) {
      return res.status(401).json({
        message: "Username or Password Invalid",
      });
    }

    let passwordValid = await bcrypt.compare(password, user.password);

    console.log(passwordValid, "validity");

    if (!passwordValid) {
      return res.status(401).json({
        message: "Password Invalid",
      });
    }

    let token = jwt.sign(
      {
        userID: user.id,
        userRole: "basic",
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    console.log(token, "FROM LOGIN ROUTER")
    // console.log(req.cookie.token)

    res.json({
      message: `Welcome ${user.username}!`,
      // token
    });
  } catch (err) {
    next(err);
  }
});

//restrict
router.get("/potlucks", restrict.restrict(), async (req, res, next) => {
  try {
    res.json(await model.findPotlucks());
  } catch (err) {
    next(err);
  }
});

//restrict
router.delete("/potlucks/:id", restrict.restrict(), async (req, res, next) => {
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
router.get("/logout", restrict.restrict(), (req, res) => {
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
