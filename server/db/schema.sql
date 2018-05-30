CREATE DATABASE dog_traits;

USE dog_traits;

CREATE TABLE breeds(
    id int NOT NULL AUTO_INCREMENT,
    breed varchar(255) NOT NULL,
    weight_m_low int,
    weight_m_high int,
    weight_f_low int,
    weight_f_high int,
    shedding varchar(20),
    grooming varchar(20),
    exercise varchar(20),
    barking varchar(20),
    biddability varchar(20),
    prey_drive varchar(20),
    notes varchar(255),
    PRIMARY KEY (ID)
);