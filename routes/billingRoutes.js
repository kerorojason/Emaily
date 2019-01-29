const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middelwares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    //因為有middleware passport，所以可以req.user直接取得user model
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
