CREATE DATABASE destroys_dogslife;

USE destroys_dogslife;

CREATE TABLE breeds(
    id int NOT NULL AUTO_INCREMENT,
    breed varchar(255) NOT NULL,
    weight_avg int,
    shedding varchar(255),
    grooming varchar(255),
    exercise varchar(255),
    biddability varchar(255),
    prey_drive varchar(255),
    barking varchar(255),
    PRIMARY KEY (ID)
);
		
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NULL DEFAULT NULL,
  password VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (ID)
);
		
CREATE TABLE breedChars (
  id INTEGER NOT NULL AUTO_INCREMENT,
  breedName VARCHAR(75) DEFAULT NULL,
  breedSize VARCHAR(10) DEFAULT NULL,
  breedEnergy VARCHAR(10) DEFAULT NULL,
  breedShedding VARCHAR(10) DEFAULT NULL,
  breedFamily VARCHAR(10) DEFAULT NULL,
  breedPlayfulness VARCHAR(10) DEFAULT NULL,
  PRIMARY KEY (id)
);
		
CREATE TABLE petfinderDogs (
  id INTEGER NOT NULL AUTO_INCREMENT,
  dogName VARCHAR(75) DEFAULT NULL,
  age INTEGER DEFAULT NULL,
  zipCode INTEGER DEFAULT NULL,
  petfinderId INTEGER DEFAULT NULL,
  PRIMARY KEY (id)
);
		
CREATE TABLE petfinderDogUser_JunctionTbl (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id INTEGER NULL DEFAULT NULL,
  dog_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE petfinderDogUser_JunctionTbl ADD FOREIGN KEY (user_id) REFERENCES user (id);
ALTER TABLE petfinderDogUser_JunctionTbl ADD FOREIGN KEY (dog_id) REFERENCES petfinderDogs (id);