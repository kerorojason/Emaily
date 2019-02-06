module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    // 401: unauthorized, forbidden
    return res.status(403).send({ error: "Not enough credits!" });
    // terminate, not calling next()
  }
  next(); // go to next midleware or route handler
};
