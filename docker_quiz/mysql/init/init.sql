CREATE DATABASE IF NOT EXISTS sample;

USE sample;

CREATE TABLE IF NOT EXISTS user(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO user (name, email) VALUES ("John", "John@gmail.com");
INSERT INTO user (name, email) VALUES ("Nancy", "Nancy@gmail.com");
INSERT INTO user (name, email) VALUES ("Mike", "Mike@gmail.com");
