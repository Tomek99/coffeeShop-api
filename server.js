const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
var cors = require("cors");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

connectDB();

const app = express();

app.use(cors());

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    verify: function (req, res, buf, encoding) {
      // get rawBody
      req.rawBody = buf.toString();
    },
  })
);

app.use("/.netlify/functions/api/users", require("./routes/usersRoutes"));
app.use("/.netlify/functions/api/products", require("./routes/productsRoutes"));
app.use(
  "/.netlify/functions/api/addresses",
  require("./routes/addressesRoutes")
);
app.use("/.netlify/functions/api/invoices", require("./routes/invoicesRoutes"));
app.use("/.netlify/functions/api/stripe", require("./routes/stripeRoutes"));
app.use("/.netlify/functions/api/orders", require("./routes/ordersRoutes"));
app.use("/.netlify/functions/api/reviews", require("./routes/reviewsRoutes"));

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("working!");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
