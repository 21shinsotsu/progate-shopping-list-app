DROP DATABASE IF EXISTS shoppingList;
CREATE DATABASE shoppingList;
USE shoppingList;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  password varchar(60) DEFAULT NULL,
  PRIMARY KEY (`userId`)
);
INSERT INTO users (username, email, password) VALUES ('果物','kudamono','$2b$10$ZwNuUluO8RDpsb1z7aYzmOfJCORPft4yS0Ght8GxZVZfxX7hTPM9a');
INSERT INTO users (username, email, password) VALUES ('野菜','yasai','$2b$10$kMAqH1hoPvSlrmi8a01VoeqNu9RbEYrh0RZHI93Ng1xO9xqvzWvju');

DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `name` TEXT,
  `done` boolean DEFAULT false,
  PRIMARY KEY (`itemId`),
  FOREIGN KEY(`userId`) REFERENCES users(`userId`)
);
INSERT INTO items (userId, name, done) VALUES (1,'りんご', true);
INSERT INTO items (userId, name, done) VALUES (1,'ぶどう', false);
INSERT INTO items (userId, name, done) VALUES (2,'とまと', false);
INSERT INTO items (userId, name, done) VALUES (2,'ごぼう', true);
