const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoices: [
      {
        NIP: {
          type: String,
        },
        name: {
          type: String,
          required: true,
        },
        street: {
          type: String,
        },
        ZIP_code: {
          type: String,
        },
        city: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
