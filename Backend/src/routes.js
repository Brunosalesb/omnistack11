const express = require('express');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const PerfilController = require('./controllers/PerfilController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.create);

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/perfil', PerfilController.list);

routes.get('/casos', CasoController.list);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);


module.exports = routes;