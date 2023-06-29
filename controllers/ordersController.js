const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const get_data = await Order.find({ userId: req.params.id });

  res.status(200).json(get_data);
});

const createOrder = asyncHandler(async (req, res) => {
  const product = await Order.create({
    userId: req.body.userId,
    paymentIntentId: req.body.payment_intent,
    products: [],
    shipping: {},
    payment_status: "true",
    subtotal: "3232",
    total: "2323",
  });

  res.status(200).send(product);
});

module.exports = {
  getOrders,
  createOrder,
};
