DROP DATABASE IF EXISTS `shoppingList`;
CREATE DATABASE `shoppingList`;
USE `shoppingList`;

DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT,
  PRIMARY KEY (`id`)
);