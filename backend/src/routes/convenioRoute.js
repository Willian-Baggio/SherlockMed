const { Router } = require('express');
const ConvenioController = require('../controllers/ConvenioController.js');

const convenioController = new ConvenioController();

const router = Router();

router.get('/convenio', (req, res) => convenioController.pegaTodos(req, res));
router.get('/convenio/:id', (req, res) => convenioController.pegaUmPorId(req, res));
router.post('/convenio', (req, res) => convenioController.criaNovo(req, res));

module.exports = router;