// Archivo principal. arrancar nodemon en terminal tipo command prompt
//  cd directorio src + "nodemon run index.js " 
//const conectar =require('./database.js');
const app = require('./app');


const PUERTO = process.env.PORT || 3001;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`); 
  console.log(`Vaya a "http://<servidor>:${PUERTO}/ayuda" para obtener ayuda de la API`);
});


