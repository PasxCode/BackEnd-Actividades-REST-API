
const express = require('express'); //para generar las ruta de nuestro servidor
const rutaActividades = require('./rutas/actividades');
const cors=require('cors'); //para aceptar conexiones desde otras fuentes
const morgan = require('morgan'); //para visualizar en consola todas las peticiones q nos llegan
const swaggerJSDoc = require('swagger-jsdoc'); //para generar documentación de ayuda. 
const swaggerUI = require('swagger-ui-express');
const opciones = require('./swaggerOptions');



const specs = swaggerJSDoc(opciones);


const app = express();
app.use(cors());
app.use(morgan('dev')); //tiene que ejecutarse antes de app.use(rutaActividades); 
app.use(express.json());
app.use(rutaActividades);
app.use('/ayuda',swaggerUI.serve,swaggerUI.setup(specs)); //http://nombreServidor:puert0/ayuda para mostrar ayuda de la API

module.exports=app;