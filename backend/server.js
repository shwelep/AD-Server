const sequelize = require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");

// Routes
const adRoutes = require("./routes/adRoutes");
const advertiserRoutes = require("./routes/advertiserRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const publisherRoutes = require("./routes/publisherRoutes");
const bidRoutes = require("./routes/bidRoutes");

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Defining Route Calls

// Ad API Calls
app.use("/ads", adRoutes);

// Advertiser API Calls
app.use("/advertiser", advertiserRoutes);

// Campaign API Calls
app.use("/campaign", campaignRoutes);

// Publisher API Calls
app.use("/publisher", publisherRoutes);

// Bid API Calls
app.use("/bid", bidRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

sequelize.options.logging = console.log;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
