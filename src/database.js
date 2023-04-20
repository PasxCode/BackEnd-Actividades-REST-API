//import { config } from 'dotenv';
const mysql = require('mysql2/promise');
const configdb= require('./config.js');

async function conectar(){

        const conn = await mysql.createConnection(configdb); //todo esto es un ej comentado de conexion y consulta
        
        // const result = await conn.query('SELECT * from tareas'); // devuelve un arreglo bidimensional
        // console.log(result);

         //const [rows] = await conn.query('SELECT * from tareas'); // devuelve solo las columnas
        // console.log(rows);
        
         return conn;
    
}

module.exports = conectar;