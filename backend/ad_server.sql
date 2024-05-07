-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 04:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ad_server`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisers`
--

CREATE TABLE `advertisers` (
  `advertiser_id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `advertiser_name` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `budget` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adverts`
--

CREATE TABLE `adverts` (
  `Ad_ID` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  `Ad_Name` varchar(50) NOT NULL,
  `Ad_Type` enum('Image','Video','Pop-Up') DEFAULT NULL,
  `Ad_Size` enum('Banner (468 x 60)','Leaderboard Banner (728 x 90)','Large Leaderboard (970 x 90)','Mobile Leaderboard (320 x 50)','Square (250 x 250)','Small Square (200 x 200)','Medium Rectangle (300 x 250)','Large Rectangle (336 x 280)','Skyscraper (120 x 600)','Wide Skyscraper (160 x 600)','Large Skyscraper (300 x 600)','Potrait (300 x 1050)','Vertical Banner (120 x 240)','Billboard (970 x 250)') DEFAULT NULL,
  `Ad_Path` varchar(1024) NOT NULL,
  `Ad_Duration` enum('1 day','2 days','3 days','4 days','5 days','6 days','1 week','2 weeks','3 weeks','1 month','2 months','3 months','4 months','5 months','6 months') DEFAULT NULL,
  `Geography` enum('Angola','Botswana','Comoros','Democratic Republic of Congo','Eswatini','Lesotho','Madagascar','Malawi','Mauritius','Mozambique','Namibia','Seychelles','South Africa','Tanzania','Zambia','Zimbabwe') DEFAULT NULL,
  `Ad_Frequency` int(11) NOT NULL,
  `Ad_Placement` int(11) NOT NULL,
  `Timing` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adverts`
--

INSERT INTO `adverts` (`Ad_ID`, `publisher_id`, `Ad_Name`, `Ad_Type`, `Ad_Size`, `Ad_Path`, `Ad_Duration`, `Geography`, `Ad_Frequency`, `Ad_Placement`, `Timing`) VALUES
(3, 0, 'Ad 1', 'Image', 'Banner (468 x 60)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714942590647-9397464-download (1).jpg', '', '', 3, 0, 20),
(4, 0, 'Ad 3', 'Image', 'Leaderboard Banner (728 x 90)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714942617043-399668966-download (1).jpg', '', '', 3, 0, 20),
(5, 0, 'Ad 2', 'Image', 'Medium Rectangle (300 x 250)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714942651130-605197211-download (1).jpg', '', '', 3, 0, 20),
(6, 0, 'Ad 6', 'Image', 'Vertical Banner (120 x 240)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714942716239-936038944-download (1).jpg', '', '', 3, 0, 20),
(7, 0, 'Ad 10', 'Image', 'Skyscraper (120 x 600)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714942809527-213232611-download (1).jpg', '', '', 3, 0, 20),
(8, 0, 'Ad 14', 'Image', 'Mobile Leaderboard (320 x 50)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714943000392-137361763-download (1).jpg', '', '', 3, 0, 20),
(9, 0, 'Ad 6', 'Image', 'Medium Rectangle (300 x 250)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714943052687-724923204-download (1).jpg', '', '', 3, 0, 20),
(10, 0, 'Ad 1', 'Image', 'Mobile Leaderboard (320 x 50)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714943441635-401724702-download (1).jpg', '', '', 3, 0, 20),
(11, 0, 'Ad 21', 'Image', 'Skyscraper (120 x 600)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1714943908188-235822747-download (1).jpg', '', '', 3, 0, 20),
(12, 0, 'Ad 14', 'Image', 'Skyscraper (120 x 600)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1715084680128-744021124-dark-naruto-1n-1280x2120.jpg', '', '', 3, 0, 20),
(13, 0, 'Ad 1', 'Image', 'Banner (468 x 60)', 'C:\\Users\\Bhunu-ShavaM\\Downloads\\AD-Server\\AD-Server\\backend\\uploads\\1715084707172-318093038-dark-naruto-1n-1280x2120.jpg', '', '', 3, 0, 20);

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `BidID` int(11) NOT NULL,
  `advertiser_id` int(11) NOT NULL,
  `Channel` varchar(120) NOT NULL,
  `BidPrice` float NOT NULL,
  `Status` varchar(20) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `CampaignID` int(11) NOT NULL,
  `Ad_ID` int(11) NOT NULL,
  `CampaignName` varchar(120) NOT NULL,
  `CampaignType` enum('Games','Stationary','Transport Services','Fashion','Furniture','Sports/Gym','Food','Technology','Travel','Books') DEFAULT NULL,
  `Channel` varchar(50) NOT NULL,
  `budget` float NOT NULL,
  `OfferImpression` varchar(50) NOT NULL,
  `Status` varchar(20) NOT NULL,
  `DateStarted` date NOT NULL,
  `DateStopped` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`CampaignID`, `Ad_ID`, `CampaignName`, `CampaignType`, `Channel`, `budget`, `OfferImpression`, `Status`, `DateStarted`, `DateStopped`) VALUES
(5, 11, 'Campaign 1', 'Sports/Gym', 'Channel 1', 0, '20', '', '2023-12-03', '0000-00-00'),
(6, 13, 'Campaign 1', 'Sports/Gym', 'Channel 1', 0, 'N$ 4000', '', '2023-12-03', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `clicks`
--

CREATE TABLE `clicks` (
  `click_id` int(11) NOT NULL,
  `impression_id` int(11) NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `impressions`
--

CREATE TABLE `impressions` (
  `impression_id` int(11) NOT NULL,
  `Ad_ID` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `publisher_id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `publisher_name` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `web_url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`publisher_id`, `UserID`, `publisher_name`, `Email`, `web_url`, `createdAt`, `updatedAt`) VALUES
(1, 15, 'Sarah Larason', 'slarason@gmail.com', '', '2024-05-07 14:51:59', '2024-05-07 14:51:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `UserType` enum('publisher','advertiser') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `UserName`, `Email`, `Password`, `UserType`) VALUES
(7, 'Roxxane', 'rmackenzie@gmail.com', '$2b$10$NLYJynpHQB3YzDtPevvnV.qTOEcCUqy44GCTHfwZ0fj6.lBQe4cDC', 'publisher'),
(8, 'Sonny', 'shenderson@gmail.com', '$2b$10$4pfp9Luw2I1WGuRBxRsMK.KDh2hiJoAudg09ad9iJMFM47AXApjEa', 'advertiser'),
(9, 'Terry', 'tbenson@gmail.com', '$2b$10$gu3bGNiclVvvUTGW1.gije/4C8Y.D0eVVZBfB6fwJj3S0O6NuTVMK', 'publisher'),
(10, 'Brandy Loveson', 'bloveson@gmail.com', '$2b$10$6ISo/CtvgUkOLiMJNetvr.71fgG/g0NYpWRnFhEMlReNSE5hIL9s.', 'advertiser'),
(15, 'Sarah Larason', 'slarason@gmail.com', '$2b$10$ej3lUorjo8qAuR24PaF5OuH9FGh6kXtU9NhfV9SWqY4Q.RnpzhsFi', 'publisher');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisers`
--
ALTER TABLE `advertisers`
  ADD PRIMARY KEY (`advertiser_id`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `adverts`
--
ALTER TABLE `adverts`
  ADD PRIMARY KEY (`Ad_ID`),
  ADD KEY `publisher_id` (`publisher_id`);

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`BidID`),
  ADD KEY `advertiser_id` (`advertiser_id`);

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`CampaignID`),
  ADD KEY `Ad_ID` (`Ad_ID`);

--
-- Indexes for table `clicks`
--
ALTER TABLE `clicks`
  ADD PRIMARY KEY (`click_id`);

--
-- Indexes for table `impressions`
--
ALTER TABLE `impressions`
  ADD PRIMARY KEY (`impression_id`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`publisher_id`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisers`
--
ALTER TABLE `advertisers`
  MODIFY `advertiser_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adverts`
--
ALTER TABLE `adverts`
  MODIFY `Ad_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `BidID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `CampaignID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `clicks`
--
ALTER TABLE `clicks`
  MODIFY `click_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `impressions`
--
ALTER TABLE `impressions`
  MODIFY `impression_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `publishers`
--
ALTER TABLE `publishers`
  MODIFY `publisher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisers`
--
ALTER TABLE `advertisers`
  ADD CONSTRAINT `advertisers_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
