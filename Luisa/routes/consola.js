const express = require('express')
const router =express.Router();
const consolaController = require('../controllers/consola')

///create, read, update,delete(CRUD) ABCC
router.get('altaConsola',consolaController.getAltaConsola);
router.post('altaConsola',consolaController.postAltaConsola);
router.get('consultaConsola',consolaController.getConsultaConsola);
module.exports= router
