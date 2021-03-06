const jwt = require("jsonwebtoken");

function restrict() {
  return async (req, res, next) => {
    let error = {
      message: "Invalid Credentials (From Restrict Middleware)",
    };
    try {

    let token = req.cookies.token;

    console.log("Routed (From Restrict Middleware)")

      if (!token) {
        return res.status(401).json(error);
      }
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(error);
        }
        req.token = decoded

        next()
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = { restrict };
