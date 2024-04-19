const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();

const router = Router();

router.get('/usuario', (req, res) => usuarioController.pegaTodos(req, res));
router.get('/usuario/:id', (req, res) => usuarioController.pegaUmPorId(req, res));
router.post('/usuario', (req, res) => usuarioController.criaNovo(req, res));
router.put('/usuario/:id', (req, res) => usuarioController.atualizaRegistro(req, res));
router.delete('/usuario/:id', (req, res) => usuarioController.exclui(req, res));

module.exports = router;