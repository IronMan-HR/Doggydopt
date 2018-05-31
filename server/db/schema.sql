CREATE DATABASE destroys_dogslife;

USE destroys_dogslife;

CREATE TABLE breeds(
    id int NOT NULL AUTO_INCREMENT,
    breed varchar(255) NOT NULL,
    weight_m_low int,
    weight_m_high int,
    weight_f_low int,
    weight_f_high int,
    shedding varchar(255),
    grooming varchar(255),
    exercise varchar(255),
    barking varchar(255),
    biddability varchar(255),
    prey_drive varchar(255),
    notes varchar(255),
    PRIMARY KEY (ID)
);