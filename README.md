# API REST Node.js

API realizada por Fco. G. Velasco como práctica en desarrolo Backed. Se trata de una api con la que prodremos tener aceso a una tabla de una base de datos MySQL. Dicha tabla contiene datos de actividades que queremos realizar o ya hemos realizado, es decier, es una especie de lista de cosas que hacer. Mas abajo dejaré código SQL para la creación del esquema y de la tabla que se usa en este proyecto.


## Usar desde Visual Studio Code:

Abrimos el directorio en visual estudio code. Seguidamente abrimos un terminal.
ejecutamos "nodemon start ./src" desde el terminal.

Si nos falla la ejecucion por estar deshabilitada la ejecución de Scripts tenemos que abrir power shell en modo administrador y ejecutar "Set-ExecutionPolicy Unrestricted"

## Operaciones de nuestra rest API.

Con las distintas rutas url podemos realizar operaciones CRUD contra una BD MySQL en este caso.
Las operaciones a realizar serán obetener las actividades guardadas, obtener un recuento de actividaes, agregar y eliminar actividades.

Para otener una ayuda debemos ir a la url "http://servido:puerto/ayuda" y se nos mostrará una pagina generada con SWAGGER con las operaciones y las rutas de nuestro servidor.

## Servidor MySQL

Para que nuestra REST API pueda funcionar es necesario crear una base de datos MySQL y editar el archivo ".env" para agregar los datos de conexión.
A continuación se deja el código SQL para la creación de la base de datos y de la tabla a utilizar.


CREATE DATABASE `actividadesdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


CREATE TABLE `actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descripcion` text,
  `completada` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
