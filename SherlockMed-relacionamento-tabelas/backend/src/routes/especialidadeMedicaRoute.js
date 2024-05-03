const { Router } = require('express');
const EspecialidadeMedicaController = require('../controllers/EspecialidadeMedicaController.js');

const especialidadeMedicaController = new EspecialidadeMedicaController();

const router = Router();

router.get('/especialidade-medica', (req, res) => especialidadeMedicaController.pegaTodos(req, res));
router.get('/especialidade-medica/:id', (req, res) => especialidadeMedicaController.pegaUmPorId(req, res));
router.post('/especialidade-medica', (req, res) => especialidadeMedicaController.criaNovo(req, res));

module.exports = router;
