#!/bin/bash

mysql -u user -psenha1234

USE LIVRARIA;

INSERT INTO Users(cpf, name, type, email, password, createdAt, updatedAt)
VALUES ("123456789", "admin", "Ademir", "admin@gmail.com", "admin", "2022-05-17 05:00:00", "2022-05-17 05:00:00");