module.exports = (req, res, next) => {
  if (!req.user) {
    // 401: unauthorized, forbidden
    return res.status(401).send({ error: "You must log in!" });
    // terminate, not calling next()
  }
  next(); // go to next midleware or route handler
};
