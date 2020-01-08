-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-10-2019 a las 00:12:51
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spectra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `children` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tours`
--

INSERT INTO `tours` (`id`, `title`, `descripcion`, `precio`, `imagen`, `children`, `created_at`) VALUES
(1, 'DESCUBRE XPLOR', 'Adéntrate a las profundidades de la tierra en recorridos subterráneos repletos de estalactitas y estalagmitas, o explora la jungla maya en divertidos vehículos anfibios.', '2339.00', 'https://yolotravel.mx/img/contenido/productosmain/463511227.jpg', '1169.00', '2019-10-29 22:35:18'),
(2, 'TOUR XCARET', ' Diversión, naturaleza y cultura para toda la familia en el Parque Xcaret ', '1978.00', 'https://www.rosatoursmexico.com/galeriart2/Combo%20Xcaret%20+%20xelha%20Desde%20Cancun.jpg', '989.00', '2019-10-29 22:36:07'),
(3, 'TOUR XCARET', ' Diversión, naturaleza y cultura para toda la familia en el Parque Xcaret ', '1978.00', 'https://www.rosatoursmexico.com/galeriart2/Combo%20Xcaret%20+%20xelha%20Desde%20Cancun.jpg', '989.00', '2019-10-29 22:37:09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
