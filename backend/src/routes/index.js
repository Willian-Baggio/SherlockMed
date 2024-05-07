const express = require('express');
const usuarios = require('./usuarioRoute.js');
// const clinica = require('./clinicaRoute.js');
const convenio = require('./convenioRoute.js');
// const especialidade = require('./especialidadeRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        usuarios,
        // clinica,
        convenio,
        // especialidade
    );
};