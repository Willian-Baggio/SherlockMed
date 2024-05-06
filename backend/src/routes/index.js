const express = require('express');
const usuarios = require('./usuarioRoute.js');
const clinicaMedica = require('./clinicaMedicaRoute.js');
const convenio = require('./convenioRoute.js');
const especialidadeMedica = require('./especialidadeMedicaRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        usuarios,
        clinicaMedica,
        convenio,
        especialidadeMedica
    );
};