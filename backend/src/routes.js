// Importando apenas parte necessária do express para rotas
const { Router } = require('express')

// Importando Controllers
const DevController = require('./controllers/DevController');
const SeachController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SeachController.index);

// Exportando rotas para poderem serem acessadas por index
module.exports = routes;