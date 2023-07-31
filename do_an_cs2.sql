-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2023 at 03:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `do_an_cs2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `name`, `phonenumber`, `created_at`, `updated_at`) VALUES
(1, 'tunghv.21it@vku.udn.vn', 'e10adc3949ba59abbe56e057f20f883e', 'HoangTung', '0705450534', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `banknumber` varchar(255) NOT NULL,
  `bankauth` varchar(255) NOT NULL,
  `bankname` varchar(255) NOT NULL,
  `qrcode` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book_flight`
--

CREATE TABLE `book_flight` (
  `book_flight_id` bigint(20) UNSIGNED NOT NULL,
  `book_flight_name` varchar(255) NOT NULL,
  `book_flight_email` varchar(255) NOT NULL,
  `book_flight_phone` varchar(255) NOT NULL,
  `book_flight_ticket_quantity` varchar(255) NOT NULL,
  `book_flight_price` varchar(255) NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book_hotel`
--

CREATE TABLE `book_hotel` (
  `book_hotel_id` bigint(20) UNSIGNED NOT NULL,
  `book_hotel_quantity` varchar(255) NOT NULL,
  `book_hotel_time` varchar(255) NOT NULL,
  `book_hotel_price` varchar(255) NOT NULL,
  `book_hotel_name` varchar(255) NOT NULL,
  `book_hotel_phone` varchar(255) NOT NULL,
  `book_hotel_email` varchar(255) NOT NULL,
  `book_hotel_status` varchar(255) NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book_restaurant`
--

CREATE TABLE `book_restaurant` (
  `book_restaurant_id` bigint(20) UNSIGNED NOT NULL,
  `book_restaurant_people_quantity` varchar(255) NOT NULL,
  `book_restaurant_location` varchar(255) NOT NULL,
  `book_restaurant_time` varchar(255) NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book_tour`
--

CREATE TABLE `book_tour` (
  `book_tour_id` bigint(20) UNSIGNED NOT NULL,
  `book_tour_name` varchar(255) NOT NULL,
  `book_tour_phone` varchar(255) NOT NULL,
  `book_tour_email` varchar(255) NOT NULL,
  `book_tour_date` date NOT NULL,
  `book_tour_price` varchar(255) NOT NULL,
  `tour_id` bigint(20) UNSIGNED NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `bank_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `brand_image` text NOT NULL,
  `brand_description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`, `brand_image`, `brand_description`, `created_at`, `updated_at`) VALUES
(8, 'Việt Nammmm', '[\"\\/imageupload\\/brand\\/2fe96863b0a40d547b79cc2e8424ce1c.jpg\",\"\\/imageupload\\/brand\\/78b7e3bc1e073b67de29ae81c45a7e81.jpg\",\"\\/imageupload\\/brand\\/6a9db20c03a86786a161e0c514bf6920.jpg\",\"\\/imageupload\\/brand\\/1d8b2ad2e7316a9dcc197a27b39f5d20.jpg\",\"\\/imageupload\\/brand\\/fe832b3157c374addd842efb79d2508b.jpg\"]', '<p>Tuyệt vời</p>', '2023-04-26 00:18:43', '2023-04-26 01:22:12'),
(9, 'sigapo', '[\"\\/imageupload\\/brand\\/8b593d0f1b2ad0e8650bef3dd9774010.jpg\"]', '<p>aefhe</p>', '2023-04-26 09:42:46', '2023-04-26 09:42:46');

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `discount_id` bigint(20) UNSIGNED NOT NULL,
  `discount_name` varchar(255) NOT NULL,
  `discount_description` varchar(255) NOT NULL,
  `discount_image` varchar(255) NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `discount_amount` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`discount_id`, `discount_name`, `discount_description`, `discount_image`, `brand_id`, `created_at`, `updated_at`, `discount_amount`) VALUES
(2, '2ser3333', '<p>sehts</p>', '[\"\\/imageupload\\/discount\\/7b5275897fc8b37d7ec7e26a6dac6c01.jpg\",\"\\/imageupload\\/discount\\/b63b173625e6db5cce1c4ce3ac7ce929.jpg\",\"\\/imageupload\\/discount\\/ad9994183bb186be750291572b04f3a1.jpg\"]', 9, '2023-04-29 08:05:53', '2023-04-29 09:24:34', '40000');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `event_id` bigint(20) UNSIGNED NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_description` varchar(255) NOT NULL,
  `event_date` datetime NOT NULL,
  `event_end_date` datetime NOT NULL,
  `event_address` varchar(255) NOT NULL,
  `event_images` varchar(255) NOT NULL,
  `event_phone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`event_id`, `event_name`, `event_description`, `event_date`, `event_end_date`, `event_address`, `event_images`, `event_phone`, `created_at`, `updated_at`) VALUES
(1, 'gsrht', '<p>sẻhes</p>', '2023-04-06 14:07:00', '2023-04-12 15:08:00', 'srts', '[\"\\/imageupload\\/event\\/338e825b2cba9dd63c1e49bbf69cbdc3.jpg\",\"\\/imageupload\\/event\\/fd50bb37e8a5f2f7e379eea4259aa390.jpg\",\"\\/imageupload\\/event\\/bfa8b7490332f73c3fe2da895b848eb9.jpg\"]', '0705450534', '2023-04-29 10:04:55', '2023-04-29 10:04:55'),
(2, 'gsrht', '<p style=\"text-align: center;\">ser5uy4eju5r6j5edtk6jetreg</p>', '2023-03-28 12:21:00', '2023-05-09 00:21:00', 'srtswrgwwrg', '[\"\\/imageupload\\/event\\/cb0e65e19918fd2e103e1059e855da09.jpg\"]', '070545053455', '2023-04-29 10:22:25', '2023-04-30 00:31:59');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feed_backs`
--

CREATE TABLE `feed_backs` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `flight_id` bigint(20) UNSIGNED NOT NULL,
  `flight_name` varchar(255) NOT NULL,
  `flight_location_departure` varchar(255) NOT NULL,
  `flight_price` varchar(255) NOT NULL,
  `flight_date` date NOT NULL,
  `flight_ticket_quantity` varchar(255) NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `flight_phone` varchar(20) DEFAULT NULL,
  `flight_description` varchar(255) DEFAULT NULL,
  `flight_time` time DEFAULT NULL,
  `flight_arrival_time` time DEFAULT NULL,
  `flight_destination` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`flight_id`, `flight_name`, `flight_location_departure`, `flight_price`, `flight_date`, `flight_ticket_quantity`, `brand_id`, `created_at`, `updated_at`, `flight_phone`, `flight_description`, `flight_time`, `flight_arrival_time`, `flight_destination`) VALUES
(1, 'Chuyến bay giá tốt từ Hồ Chí Minh', 'Hà Nội', '12000', '2023-05-04', '122', 8, '2023-04-30 02:37:27', '2023-04-30 06:40:46', '0705450534', '<p>srthehsehsrth</p>\r\n<div class=\"ddict_btn\" style=\"top: 62px; left: 380.475px;\"><img src=\"chrome-extension://cianljdimgjlpmjllcbahmpdnicglaap/logo/48.png\"></div>', '02:35:00', '10:31:00', 'Hồ Chí Minh');

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `hotel_id` bigint(20) UNSIGNED NOT NULL,
  `hotel_name` varchar(255) NOT NULL,
  `hotel_location` varchar(255) NOT NULL,
  `hotel_room_quantity` varchar(255) NOT NULL,
  `hotel_utilities` varchar(255) NOT NULL,
  `hotel_description` varchar(255) NOT NULL,
  `hotel_policy` varchar(255) NOT NULL,
  `hotel_images` varchar(255) NOT NULL,
  `hotel_phone` varchar(255) NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `hotel_price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`hotel_id`, `hotel_name`, `hotel_location`, `hotel_room_quantity`, `hotel_utilities`, `hotel_description`, `hotel_policy`, `hotel_images`, `hotel_phone`, `brand_id`, `created_at`, `updated_at`, `hotel_price`) VALUES
(10, 'Mường Thanh', 'Đà Nẵng', '1111', 'Cho thuê xe máy', '<p>&nbsp;rthdrthj</p>', '<p>drthdrt</p>', '[\"\\/imageupload\\/hotel\\/7dd36f5adf0b283e3359f462182cb703.jpg\",\"\\/imageupload\\/hotel\\/de7495b187aae7df51e5449cfc9cdd05.jpg\",\"\\/imageupload\\/hotel\\/92ceb286dd783221a38ee2c13551d737.jpg\"]', '0705450534', 9, '2023-04-29 07:08:10', '2023-04-29 07:08:10', '345234');

-- --------------------------------------------------------

--
-- Table structure for table `meets`
--

CREATE TABLE `meets` (
  `meets_id` int(10) UNSIGNED NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_fullname` varchar(255) DEFAULT NULL,
  `service_email` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2022_03_08_011639_create_services_table', 1),
(11, '2022_03_09_011349_create_admins_table', 1),
(12, '2022_03_09_011403_create_banks_table', 1),
(13, '2022_03_09_011420_create_feedback_table', 1),
(14, '2022_03_09_011442_create_meets_table', 1),
(15, '2022_03_09_011452_create_news_table', 1),
(16, '2022_03_09_011505_create_orders_table', 1),
(17, '2022_03_09_011533_create_order_details_table', 1),
(18, '2022_03_09_011621_create_products_table', 1),
(19, '2023_03_20_010534_create_brand_table', 1),
(20, '2023_03_21_010830_create_discount_table', 1),
(21, '2023_03_25_231055_create_restaurand_table', 1),
(22, '2023_03_29_231429_create_flight_table', 1),
(23, '2023_04_10_000110_create_hotel_table', 1),
(24, '2023_04_12_011052_create_event_table', 1),
(25, '2023_04_19_230345_create_tour_travel_table', 1),
(26, '2023_04_19_233040_create_book_tour_table', 1),
(27, '2023_04_20_004207_create_book_restaurant_table', 1),
(28, '2023_04_20_004544_create_book_flight_table', 1),
(29, '2023_04_20_011317_create_book_hotel_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` char(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` char(36) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `pay` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_code` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_quantity` varchar(255) NOT NULL,
  `user_fullname` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phonenumber` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_address2` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) NOT NULL,
  `order_pay` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`product_image`)),
  `product_price` int(11) NOT NULL,
  `product_origin` varchar(255) NOT NULL,
  `product_manufacturer` varchar(255) NOT NULL,
  `product_discount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `product_image`, `product_price`, `product_origin`, `product_manufacturer`, `product_discount`, `created_at`, `updated_at`) VALUES
(2, '356', '<p>111</p>', '[\"\\/imageupload\\/0a98832f18f2c4d73828909ce6204429.png\",\"\\/imageupload\\/668290e4be708662aa72824675332d1a.png\",\"\\/imageupload\\/9d9f5f2d57bfcceeb26bfe4f908a6bec.png\"]', 111, '111', '111', 111, '2023-04-24 08:24:50', '2023-04-24 08:24:50'),
(3, '64', '<p>333</p>', '[\"\\/imageupload\\/d929e0bec4069796bfc2199b7ea8ce7b.png\",\"\\/imageupload\\/bb2bb58488ff88c865c96adb32371ca2.png\",\"\\/imageupload\\/9f46f9908c7114e9827e6cf39a70824d.png\"]', 62, '654', '333', 333, '2023-04-25 23:42:28', '2023-04-25 23:42:28');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` bigint(20) UNSIGNED NOT NULL,
  `restaurant_name` varchar(255) NOT NULL,
  `restaurant_location` varchar(255) NOT NULL,
  `restaurant_quantity` varchar(255) NOT NULL,
  `restaurant_images` varchar(255) NOT NULL,
  `restaurant_phone` varchar(255) NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `restaurant_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurant_id`, `restaurant_name`, `restaurant_location`, `restaurant_quantity`, `restaurant_images`, `restaurant_phone`, `brand_id`, `created_at`, `updated_at`, `restaurant_description`) VALUES
(1, 'Sà Bì Chưởng', 'TP Hồ Chí Minh', '1112', '[\"\\/imageupload\\/restaurant\\/b0d1bb9e16c6615e08a97da79dccc889.jpg\"]', '0705450534', 8, '2023-04-30 08:36:29', '2023-04-30 08:36:29', 'rthr'),
(2, 'Sà Bì Chưởng', 'TP Hồ Chí Minh', '111232', '[\"\\/imageupload\\/restaurant\\/8ba0a14ad4f5d3cd16446c6d1339a437.jpg\"]', '0705450534', 8, '2023-04-30 08:41:36', '2023-04-30 08:49:26', '<p>drthdrhdr</p>'),
(3, 'Phúc Long', 'Đà Nẵng', '111232', '[\"\\/imageupload\\/restaurant\\/937da13cd0036efd797fabceb46f6810.jpg\"]', '0705450534', 8, '2023-04-30 09:59:20', '2023-04-30 09:59:20', '<p>ảgaergstst</p>');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobilePhone` varchar(255) NOT NULL,
  `homePhone` varchar(255) NOT NULL,
  `officePhone` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tour_travel`
--

CREATE TABLE `tour_travel` (
  `tour_id` bigint(20) UNSIGNED NOT NULL,
  `tour_name` varchar(255) NOT NULL,
  `tour_duration` varchar(255) NOT NULL,
  `tour_schedule` text NOT NULL,
  `tour_location` varchar(255) NOT NULL,
  `tour_price` varchar(255) NOT NULL,
  `tour_date` varchar(255) NOT NULL,
  `tour_utilities` text NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `hotel_id` bigint(20) UNSIGNED NOT NULL,
  `flight_id` bigint(20) UNSIGNED NOT NULL,
  `restaurant_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tour_images` varchar(255) NOT NULL,
  `tour_group_size` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tour_travel`
--

INSERT INTO `tour_travel` (`tour_id`, `tour_name`, `tour_duration`, `tour_schedule`, `tour_location`, `tour_price`, `tour_date`, `tour_utilities`, `brand_id`, `hotel_id`, `flight_id`, `restaurant_id`, `created_at`, `updated_at`, `tour_images`, `tour_group_size`) VALUES
(2, 'Du lịch Nhật Bản', '6 ngày 6 đêm', '<p>srtrts</p>', 'Nhật Bản', '122333', 'Khởi hành trong toàn bộ các ngày từ 09/03/2023 đến 31/12/2023', 'drtyhdtryjdrtj', 8, 10, 1, 1, '2023-04-30 10:44:59', '2023-04-30 10:57:31', '[\"\\/imageupload\\/tour\\/6a4171d31a2ee8e7857c3d8633d3db2d.jpg\"]', '23');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Hoạt Động',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `book_flight`
--
ALTER TABLE `book_flight`
  ADD PRIMARY KEY (`book_flight_id`),
  ADD KEY `book_flight_id_foreign` (`id`),
  ADD KEY `book_flight_discount_id_foreign` (`discount_id`),
  ADD KEY `book_flight_bank_id_foreign` (`bank_id`);

--
-- Indexes for table `book_hotel`
--
ALTER TABLE `book_hotel`
  ADD PRIMARY KEY (`book_hotel_id`),
  ADD KEY `book_hotel_id_foreign` (`id`),
  ADD KEY `book_hotel_discount_id_foreign` (`discount_id`),
  ADD KEY `book_hotel_bank_id_foreign` (`bank_id`);

--
-- Indexes for table `book_restaurant`
--
ALTER TABLE `book_restaurant`
  ADD PRIMARY KEY (`book_restaurant_id`),
  ADD KEY `book_restaurant_id_foreign` (`id`),
  ADD KEY `book_restaurant_discount_id_foreign` (`discount_id`),
  ADD KEY `book_restaurant_bank_id_foreign` (`bank_id`);

--
-- Indexes for table `book_tour`
--
ALTER TABLE `book_tour`
  ADD PRIMARY KEY (`book_tour_id`),
  ADD UNIQUE KEY `book_tour_book_tour_email_unique` (`book_tour_email`),
  ADD KEY `book_tour_tour_id_foreign` (`tour_id`),
  ADD KEY `book_tour_id_foreign` (`id`),
  ADD KEY `book_tour_discount_id_foreign` (`discount_id`),
  ADD KEY `book_tour_bank_id_foreign` (`bank_id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`discount_id`),
  ADD KEY `discount_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `feed_backs`
--
ALTER TABLE `feed_backs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`flight_id`),
  ADD KEY `flight_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`hotel_id`),
  ADD KEY `hotel_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `meets`
--
ALTER TABLE `meets`
  ADD PRIMARY KEY (`meets_id`),
  ADD KEY `meets_id_foreign` (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`),
  ADD KEY `restaurand_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tour_travel`
--
ALTER TABLE `tour_travel`
  ADD PRIMARY KEY (`tour_id`),
  ADD KEY `tour_travel_brand_id_foreign` (`brand_id`),
  ADD KEY `tour_travel_hotel_id_foreign` (`hotel_id`),
  ADD KEY `tour_travel_flight_id_foreign` (`flight_id`),
  ADD KEY `tour_travel_restaurand_id_foreign` (`restaurant_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `bank_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `book_flight`
--
ALTER TABLE `book_flight`
  MODIFY `book_flight_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `book_hotel`
--
ALTER TABLE `book_hotel`
  MODIFY `book_hotel_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `book_restaurant`
--
ALTER TABLE `book_restaurant`
  MODIFY `book_restaurant_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `book_tour`
--
ALTER TABLE `book_tour`
  MODIFY `book_tour_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `discount`
--
ALTER TABLE `discount`
  MODIFY `discount_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `event_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feed_backs`
--
ALTER TABLE `feed_backs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flight`
--
ALTER TABLE `flight`
  MODIFY `flight_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `hotel_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `meets`
--
ALTER TABLE `meets`
  MODIFY `meets_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tour_travel`
--
ALTER TABLE `tour_travel`
  MODIFY `tour_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book_flight`
--
ALTER TABLE `book_flight`
  ADD CONSTRAINT `book_flight_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`bank_id`),
  ADD CONSTRAINT `book_flight_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`),
  ADD CONSTRAINT `book_flight_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `book_hotel`
--
ALTER TABLE `book_hotel`
  ADD CONSTRAINT `book_hotel_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`bank_id`),
  ADD CONSTRAINT `book_hotel_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`),
  ADD CONSTRAINT `book_hotel_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `book_restaurant`
--
ALTER TABLE `book_restaurant`
  ADD CONSTRAINT `book_restaurant_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`bank_id`),
  ADD CONSTRAINT `book_restaurant_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`),
  ADD CONSTRAINT `book_restaurant_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `book_tour`
--
ALTER TABLE `book_tour`
  ADD CONSTRAINT `book_tour_bank_id_foreign` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`bank_id`),
  ADD CONSTRAINT `book_tour_discount_id_foreign` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`discount_id`),
  ADD CONSTRAINT `book_tour_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `book_tour_tour_id_foreign` FOREIGN KEY (`tour_id`) REFERENCES `tour_travel` (`tour_id`);

--
-- Constraints for table `discount`
--
ALTER TABLE `discount`
  ADD CONSTRAINT `discount_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`);

--
-- Constraints for table `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `flight_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`);

--
-- Constraints for table `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `hotel_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`);

--
-- Constraints for table `meets`
--
ALTER TABLE `meets`
  ADD CONSTRAINT `meets_id_foreign` FOREIGN KEY (`id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `restaurand_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`);

--
-- Constraints for table `tour_travel`
--
ALTER TABLE `tour_travel`
  ADD CONSTRAINT `tour_travel_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`),
  ADD CONSTRAINT `tour_travel_flight_id_foreign` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`),
  ADD CONSTRAINT `tour_travel_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`),
  ADD CONSTRAINT `tour_travel_restaurand_id_foreign` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
