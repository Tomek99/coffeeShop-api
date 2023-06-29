const express = require("express");
const router = express.Router();
const { setPayment, setWebhook } = require("../controllers/stripeController");

router.route("/create-checkout-session").post(setPayment);
router.route("/webhookstripe").post(setWebhook);

module.exports = router;
