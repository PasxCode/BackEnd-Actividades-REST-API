const conectar = require('../database.js');

const getActividades = async (req,res) =>{
    const conn = await conectar();
    const [rows] = await conn.query('SELECT * FROM actividades');
    res.json(rows);
 } 
 const getActividadId = async (req,res) =>{
   const conn = await conectar();
   const [rows] = await conn.query(`SELECT * FROM actividades WHERE actividades.id = ?`,[req.params.id]);
   res.json(rows[0]);
} 
const getContadorActividades = async (req,res) =>{
   const conn = await conectar();
   const [rows] = await conn.query(`SELECT count(*) FROM actividades`);
   res.json(rows[0]['count(*)']);
} 

const createActividad = async (req,res) =>{
   const conn = await conectar();
   const resultado = await conn.query('INSERT INTO actividades(titulo,descripcion) VALUES (?,?)',
                                    [req.body.titulo,
                                    req.body.descripcion]);
   res.json(resultado);
}

const deleteActividad = async (req,res) =>{
   const conn = await conectar();
   const resultado = await conn.query(`DELETE FROM actividades WHERE actividades.id = ${req.params.id}`);
   res.json(resultado);
} 
const updateActividad = async (req,res) =>{
   const conn = await conectar();
   const [rows] = await conn.query('UPDATE actividades SET ? WHERE id=?',
                                    [req.body,req.params.id]);

   res.sendStatus(204);
} 

module.exports = [{getActividades,getActividadId,getContadorActividades,createActividad,deleteActividad,updateActividad}];