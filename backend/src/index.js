/*
Rota/Recurso
*/


/* 
Métodos HTTP: 
*GET: buscar/listar uma informação do back-end
*POST: criar uma imformação no back-end
*PUT: alterar alguma informação do back-end
*DELETE: deletar alguma informação do back-end
*/

/**
 * Tipos de parâmetros:
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)  
 * Route params: Parâmetros utilizados para identificar recursos 
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos.  
 */

 /**
  * SQL: MySQL, SQLite, PostGreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */


const express = require ('express');
const cors = require ('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen (3333);