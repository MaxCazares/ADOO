# Análisis y Diseño Orientado a Objetos con Martha Rosa Cordero López
Este repositorio contiene el proyecto de Análisis y Diseño Orientado a Objetos con la profesora Martha Rosa Cordero López en el periodo febrero - junio de 2021 en línea.

Para hacer uso de este proyecto se necesitan lo siguiente:

* [MySQL para windows](https://dev.mysql.com/downloads/mysql/)
* [Node.js](https://nodejs.org/en/)


Pasos para ejecutar la página

1. Para recuperar la carpeta `node_modules` **necesaria para ejecutar el proyecto** ejecutar el comando `npm install` desde una consola ubicada en la carpeta del proyecto

2. Instalar MySQL en la computadora local y asegurarse de conocer tanto usuario como contraseña 

3. Dar de alta la base de datos en la `town_market` dicha base de datos se encuentra en la ruta \src\sql

4. Configurar el archivo llamado `dbConnection.js` que se encuentra en la ruta \src\config, en este archivo se debe colocar tanto usuario como contraseña de MySQL

5. Para ejecutar la página web se debe escribir el comando `npm start` desde una consola ubicada en la carpeta del proyecto. La página se visualizara a través de un navegador web con la siguiente ruta `localhost:5000`

Los archivos de la página se encuentran en formato `.ejs` debido a la naturaleza de la conexión y se encuentran en la dirección \src\app\views, aquí mismo se encuentran los archivos .css 