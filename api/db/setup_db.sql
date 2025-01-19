-- Creación y uso de la db, ejecutar estas 2 lineas primero
CREATE DATABASE db_todoapp;
USE db_todoapp;

-- Creación de la tabla Tarea
CREATE TABLE Tarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    completada BOOLEAN DEFAULT FALSE
);
