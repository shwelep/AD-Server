const sequelize = require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const path = require("path")

// Routes
const adRoutes = require("./routes/adRoutes");
const advertiserRoutes = require("./routes/advertiserRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const publisherRoutes = require("./routes/publisherRoutes");
const bidRoutes = require("./routes/bidRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();
app.use('/images', express.static(path.join(__dirname, 'images'), { 
  setHeaders: (res, filePath) => {
    const mimeType = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
    };
    const ext = path.extname(filePath);
    res.setHeader('Content-Type', mimeType[ext] || 'application/octet-stream');
  }
}));

app.use(bodyParser.json());

const adData = [
  { 
    id: 1, 
    name: 'Low, low prices on Shoes', 
    imageUrl: 'http://localhost:3002/images/dushawn-jovic-tr6BWkWMpEs-unsplash.jpg', 
    placementId: 'sidebarAd',
    placements: ['sidebarBanner'],
    websiteUrl: 'https://unsplash.com/photos/white-and-black-nike-air-force-1-low-tr6BWkWMpEs'
  },
  { 
    id: 2, 
    name: 'Shopping Spree', 
    imageUrl: 'http://localhost:3002/images/freestocks-_3Q3tsJ01nc-unsplash.jpg', 
    placementId: 'topBannerAd',
    placements: ['topBanner'],
    websiteUrl: 'https://unsplash.com/photos/photo-of-woman-holding-white-and-black-paper-bags-_3Q3tsJ01nc'
  },
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/retrieve-ads', (req, res) => {
  res.json(adData)
  return
})

app.use("/ads", adRoutes);

// Advertiser API Calls
app.use("/advertiser", advertiserRoutes);

// Campaign API Calls
app.use("/campaign", campaignRoutes);

// Publisher API Calls
app.use("/publisher", publisherRoutes);

// Bid API Calls
app.use("/bid", bidRoutes);

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
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
