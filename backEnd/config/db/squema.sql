// Creacion de la base de datos

CREATE DATABASE wiki_bupa;

\l listado de las bases de datos
\c wiki_bupa

// Creacion de las tablas users

\dt listado de las tablas

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO roles (name) VALUES ('Administrator'), ('User'), ('Moderator');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role_id INT REFERENCES roles(id),
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    ocuppation VARCHAR(50),
    workplace VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (role_id, firstname, lastname, email, password, ocuppation, workplace) VALUES (1, 'Andrés', 'López', 'andres.lopezm@bupa.cl', 'Javascript.2024*1', 'Analista TI', 'Cerro Colorado');

ALTER TABLE users ADD COLUMN ocuppation VARCHAR(50), ADD COLUMN workplace VARCHAR(50);

// cambiar nombre de columna

ALTER TABLE users RENAME COLUMN ocuppation TO occupation;

UPDATE users SET occupation = 'Analista TI', workplace = 'Cerro Colorado' WHERE id = 6;