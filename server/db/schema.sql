CREATE DATABASE dogs;

USE dogs;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NULL DEFAULT NULL,
  password VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (ID)
) COMMENT 'stores a human being';

DROP TABLE IF EXISTS `FaveDogs`;
CREATE TABLE FaveDogs (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  age VARCHAR(30) NULL DEFAULT NULL,
  breeds VARCHAR(30) NULL DEFAULT NULL,   -- breeds object is converted to string via JSON.stringify
  address1 VARCHAR(30) NULL DEFAULT NULL, -- contact object has been separated into multiple fields
  address2 VARCHAR(30) NULL DEFAULT NULL,
  city VARCHAR(30) NULL DEFAULT NULL,
  email VARCHAR(30) NULL DEFAULT NULL,
  fax VARCHAR(30) NULL DEFAULT NULL,
  phone VARCHAR(30) NULL DEFAULT NULL,
  `state` VARCHAR(30) NULL DEFAULT NULL,
  zip VARCHAR(30) NULL DEFAULT NULL,
  `description` VARCHAR(30) NULL DEFAULT NULL,
  dog_id VARCHAR(30) NULL DEFAULT NULL,
  media VARCHAR(30) NULL DEFAULT NULL,    -- media object is converted to string via JSON.stringify
  mix VARCHAR(30) NULL DEFAULT NULL,
  `name` VARCHAR(30) NULL DEFAULT NULL,
  options VARCHAR(30) NULL DEFAULT NULL,  -- options object is converted to string via JSON.stringify
  sex VARCHAR(30) NULL DEFAULT NULL,
  shelterId VARCHAR(30) NULL DEFAULT NULL,
  shelterPetId VARCHAR(30) NULL DEFAULT NULL,
  size VARCHAR(30) NULL DEFAULT NULL,
  `status` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'stores a whole dog';

DROP TABLE IF EXISTS `Users_FaveDogs`;
CREATE TABLE Users_FaveDogs (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id INTEGER NULL DEFAULT NULL,
  dog_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'join table that matches one user_id to one dog_id';

-- --- BELOW IS COMMENTED OUT WORK LEFT OVER FROM PREVIOUS GROUP
-- Foreign Keys 
-- ---

-- ALTER TABLE petfinderDogUser_JunctionTbl ADD FOREIGN KEY (user_id) REFERENCES user (id);
-- ALTER TABLE petfinderDogUser_JunctionTbl ADD FOREIGN KEY (dog_id) REFERENCES petfinderDogs (id);

-- CREATE TABLE breeds(                   == `breeds` table already created by Dean in `dog breed sql download.sql`
--     id int NOT NULL AUTO_INCREMENT,    == commenting out Anthony's two tables
--     breed varchar(255) NOT NULL,
--     weight_avg int,
--     shedding varchar(255),
--     grooming varchar(255),
--     exercise varchar(255),
--     biddability varchar(255),
--     prey_drive varchar(255),
--     barking varchar(255),
--     PRIMARY KEY (ID)
-- );
		
-- CREATE TABLE breedChars (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   breedName VARCHAR(75) DEFAULT NULL,
--   breedSize VARCHAR(10) DEFAULT NULL,
--   breedEnergy VARCHAR(10) DEFAULT NULL,
--   breedShedding VARCHAR(10) DEFAULT NULL,
--   breedFamily VARCHAR(10) DEFAULT NULL,
--   breedPlayfulness VARCHAR(10) DEFAULT NULL,
--   PRIMARY KEY (id)
-- );