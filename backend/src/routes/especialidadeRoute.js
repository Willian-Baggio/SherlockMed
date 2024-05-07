const { Router } = require('express');
const EspecialidadeController = require('../controllers/EspecialidadeController.js');

const especialidadeController = new EspecialidadeController();

const router = Router();

router.get('/especialidade', (req, res) => especialidadeController.pegaTodos(req, res));
// router.get('/especialidade/:id', (req, res) => especialidadeController.pegaUmPorId(req, res));
router.post('/especialidade', (req, res) => especialidadeController.criaNovo(req, res));

module.exports = router;