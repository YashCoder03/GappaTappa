const express =  require('express');
const register = require('../Controller/registerController');

const routes = express.Router();

routes.post('/',register.reg);
routes.get('/',register.check);
module.exports = {routes};