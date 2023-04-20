const {config} = require('dotenv');
config();

const configdb = {

    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'actividadesdb',
    user: process.env.DB_USER || 'prueba',
    password:process.env.DB_PASSWORD || 'prueba1234'
}

module.exports = configdb;