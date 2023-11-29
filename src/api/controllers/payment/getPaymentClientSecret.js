const getCentFromDoller = require("../../../utils/getCentFromDoller");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getPaymentClientSecret = async (req, res) => {
  try {
    const { price: priceInDoller = 0 } = req?.body ? req.body : {};
    const priceInCent = getCentFromDoller(priceInDoller);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: priceInCent,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({
      message: err?.message,
    });
  }
};

module.exports = getPaymentClientSecret;
