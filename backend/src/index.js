const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Metodos HTTP:
 * GET: Buscar/listar informação no Backend
 * POST: Enviar informação no Backend
 * PUT: Alterar informação no Backend
 * DELETE: Deletar informação no Backend
 */

 /**
 *Tipos de parametros
 * Query: Params nomeados enviados na rota apos o "?" sem aspas (filtros e paginação (ex: app.get('/users?name=Tiago&idade=25)
 * Route Params: Parametros utilizado para identificar recursos especifico (ex: app.get('/users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /** 
 DB
 SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 NoSQL: MongoDB, CouchDB etc
*/

/**
Driver Banco de dados: SELECT * FROM users (linguagem direto do banco)
Query Builder: 

 

*/

app.use(routes);


app.listen(3333);