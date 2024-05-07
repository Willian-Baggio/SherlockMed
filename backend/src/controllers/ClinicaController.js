const Controller = require('./Controller.js');
const ClinicaServices = require('../services/ClinicaServices.js');

const clinicaServices = new ClinicaServices();

class ClinicaController extends Controller {
    constructor() {
        super(clinicaServices);
    }
}

module.exports = ClinicaController;