const { Router } = require('express');
const ClinicaController = require('../controllers/ClinicaController.js');

const clinicaController = new ClinicaController();

const router = Router();

router.get('/clinica', (req, res) => clinicaController.pegaTodos(req, res));
router.get('/clinica/:id', (req, res) => clinicaController.pegaUmPorId(req, res));
router.post('/clinica', (req, res) => clinicaController.criaNovo(req, res));
router.put('/clinica/:id', (req, res) => clinicaController.atualizaRegistro(req, res));
router.delete('/clinica/:id', (req, res) => clinicaController.exclui(req, res));

module.exports = router;