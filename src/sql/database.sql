CREATE DATABASE town_market;

USE town_market;

CREATE TABLE locales(
    nombre_neg VARCHAR(50),
    nombre_prop VARCHAR(50),
    giro VARCHAR(25),
    calle VARCHAR(50),
    numero int,
    colonia VARCHAR(50),
    municipio VARCHAR(50),
    tel_cont VARCHAR(20),
    correo_cont VARCHAR(50),
    serv_dom VARCHAR(2),
    correo_cuenta VARCHAR(50) PRIMARY KEY,
    contra VARCHAR(25)
);

INSERT INTO locales(nombre_neg, nombre_prop, giro, calle, numero, colonia, municipio, tel_cont, correo_cont, serv_dom, correo_cuenta, contra)
values('Tienda','Fabian','Tienda','Floresta',60,'Santa Catarina','Azcapotzalco','5516283437','correoContacto@example.com','Si','correo@example.com','password');

SELECT * FROM locales;