-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 12:21 PM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poushali`
--

-- --------------------------------------------------------

--
-- Table structure for table `hobby`
--

CREATE TABLE IF NOT EXISTS `hobby` (
  `email` varchar(30) NOT NULL,
  `hobby` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hobby`
--

INSERT INTO `hobby` (`email`, `hobby`) VALUES
('poushali@fusioncharts.com', 'reading'),
('poushali@fusioncharts.com', 'movie'),
('poushali@fusioncharts.com', 'reading'),
('poushali@fusioncharts.com', 'foodbal'),
('poushali.guha6@gmail.com', 'reading');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE IF NOT EXISTS `subscription` (
  `name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `country` varchar(10) NOT NULL,
  `state` varchar(20) NOT NULL,
  `feedback` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`name`, `email`, `mobile`, `gender`, `country`, `state`, `feedback`) VALUES
('poushali guha', 'poushali.guha6@gmail.com', '7278464305', 'female', 'india', 'westbengal', 'js'),
('poushali guha', 'poushali@fusioncharts.com', '8961319916', 'female', 'india', 'westbengal', 'php');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
