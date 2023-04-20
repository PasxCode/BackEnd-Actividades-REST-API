const {Router}=require('express');
const [{getActividadId}] = require('../controladores/actividades');
const [{getContadorActividades}] = require('../controladores/actividades');
const [{getActividades}] = require('../controladores/actividades');
const [{createActividad}] = require('../controladores/actividades');
const [{deleteActividad}] = require('../controladores/actividades');
const [{updateActividad}] = require('../controladores/actividades');

const ruta = Router();


/**
 * @openapi
 * http://host:port/actividades:
 *   get:
 *     tags:
 *       - PETICIONES
 *     description: <p>Devuelve todas las actividades almacenadas en la base de datos.</p>
 *                  <p>Necesario el uso de <i>"async" y "await"</i> al tratarse de promesas.
 *     responses:
 *       200:
 *         description: Éxito a obtener las actividades existentes en la BD.
 *       4xx:
 *          description: Se produjo algún error en el cliente.
 *       5xx:
 *          description: Se produjo un error en el servidor.
 *                      
 */
ruta.get('/actividades',getActividades);


/**
 * @openapi
 * http://host:port/count:
 *   get:
 *     tags:
 *       - PETICIONES
 *     description: <p>Devuelve la cantidad de actividades almacenadas en la base de datos.</p>
 *                  <p>Necesario el uso de <i>"async" y "await"</i> al tratarse de promesas.
 *     responses:
 *       200:
 *         description: Éxito a obtener recuento de actividades existentes en la BD.
 *       4xx:
 *          description: Se produjo algún error en el cliente.
 *       5xx:
 *          description: Se produjo un error en el servidor.
 *                      
 */
ruta.get('/actividades/count',getContadorActividades);

/**
 * @openapi
 * http://host:port/actividades:id:
 *   get:
 *     tags:
 *       - PETICIONES
 *     description: <p>Devuelve una actividad con un <i>id</i> concreto de la base de datos.</p>
 *                  <p>Necesario el uso de <i>"async" y "await"</i> al tratarse de promesas.
 *     responses:
 *       200:
 *         description: Éxito a obtener la actividad en la BD.
 *       4xx:
 *          description: Se produjo algún error en el cliente.
 *       5xx:
 *          description: Se produjo un error en el servidor.
 *                      
 */
ruta.get('/actividades/:id',getActividadId);

/**
 * @openapi
 * http://host:port/actividades:
 *   post:
 *     tags:
 *       - PETICIONES
 *     description: <p>Añade una nueva actividad a la base de datos datos.</p>
 *                  <p>Necesario el uso de <i>"async" y "await"</i> al tratarse de promesas.
 *     responses:
 *       200:
 *         description: Éxito a obtener las actividades existentes en la BD.
 *       4xx:
 *          description: Se produjo algún error en el cliente.
 *       5xx:
 *          description: Se produjo un error en el servidor.
 *                      
 */

ruta.post('/actividades',createActividad);

/**
 * @openapi
 * http://host:port/actividades:id:
 *   delete:
 *     tags:
 *       - PETICIONES
 *     description: <p>Elimina la actividad con un <i>id</i> concreto de la base de datos.</p>
 *                  <p>Necesario el uso de <i>"async" y "await"</i> al tratarse de promesas.
 *     responses:
 *       200:
 *         description: Éxito a obtener las actividades existentes en la BD.
 *       4xx:
 *          description: Se produjo algún error en el cliente.
 *       5xx:
 *          description: Se produjo un error en el servidor.
 *                      
 */
ruta.delete('/actividades/:id',deleteActividad);

/**
 * @openapi
 * http://host:port/actividades:id:
 *   put:
 *     tags:
 *       - PETICIONES
 *     description: <p>Modifica la actividad con un <i>id</i> concreto de la base de datos.</p>
 *                  <p>Necesario el uso de <i>"async" y "await"</i> al tratarse de promesas.
 *     responses:
 *       200:
 *         description: Éxito a obtener las actividades existentes en la BD.
 *       4xx:
 *          description: Se produjo algún error en el cliente.
 *       5xx:
 *          description: Se produjo un error en el servidor.
 *                      
 */
ruta.put('/actividades/:id',updateActividad);

module.exports= ruta;
