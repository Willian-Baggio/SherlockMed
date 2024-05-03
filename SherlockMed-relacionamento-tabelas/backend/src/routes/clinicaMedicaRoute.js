const { Router } = require('express');
const ClinicaMedicaController = require('../controllers/ClinicaMedicaController.js');

const clinicaMedicaController = new ClinicaMedicaController();

const router = Router();

router.get('/clinica-medica', (req, res) => clinicaMedicaController.pegaTodos(req, res));
router.get('/clinica-medica/:id', (req, res) => clinicaMedicaController.pegaUmPorId(req, res));
router.post('/clinica-medica', (req, res) => clinicaMedicaController.criaNovo(req, res));
router.put('/clinica-medica/:id', (req, res) => clinicaMedicaController.atualizaRegistro(req, res));
router.delete('/clinica-medica/:id', (req, res) => clinicaMedicaController.exclui(req, res));

module.exports = router;
