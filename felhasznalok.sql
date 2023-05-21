CREATE DATABASE felhasznalok;

USE felhasznalok;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nev VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  jelszo VARCHAR(255) NOT NULL
);
