const sequelize = require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Define storage settings for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

// File type validation middleware
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ['image/jpeg', 'image/png']; // Allowed image types
  const allowedVideoTypes = ['video/mp4', 'video/mpeg']; // Allowed video types

  if (req.body.Ad_Type === 'Image' && !allowedImageTypes.includes(file.mimetype)) {
    cb(new Error('Invalid file type. Only JPEG and PNG images are allowed.'));
  } else if (req.body.Ad_Type === 'video' && !allowedVideoTypes.includes(file.mimetype)) {
    cb(new Error('Invalid file type. Only MP4 and MPEG videos are allowed.'));
  } else {
    cb(null, true);
  }
};

// File size validation middleware
const fileSizeLimit = 10 * 1024 * 1024; // 10 MB file size limit
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: fileSizeLimit
  }
});

module.exports = {
  upload: upload
};

// Routes
const adRoutes = require("./routes/adRoutes");
const advertiserRoutes = require("./routes/advertiserRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const publisherRoutes = require("./routes/publisherRoutes");
const bidRoutes = require("./routes/bidRoutes");
const userRoutes = require("./routes/userRoutes");

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
app.use("/bids", bidRoutes);

// User API Calls
app.use("/user", userRoutes);

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
