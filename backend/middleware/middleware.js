const jwt = require("jsonwebtoken");

const jwt_secret = "sijs";

const middleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header required" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Token missing from authorization header" });
  }

  jwt.verify(token, jwt_secret, (err, userData) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    req.user = userData; // attach user data (e.g. email) to req.user
    next();
  });
};

module.exports = middleware;
