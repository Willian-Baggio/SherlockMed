const { Router } = require('express');
const ClinicaController = require('../controllers/ClinicaController.js');

const clinicaController = new ClinicaController();

const router = Router();

router.get('/convenio', (req, res) => clinicaController.pegaTodos(req, res));
router.get('/convenio/:id', (req, res) => clinicaController.pegaUmPorId(req, res));
router.post('/convenio', (req, res) => clinicaController.criaNovo(req, res));

module.exports = router;