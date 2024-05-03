const Controller = require('./Controller.js');
const ClinicaMedicaServices = require('../services/ClinicaMedica.js')

const clinicaMedicaServices = new ClinicaMedicaServices();

class ClinicaMedicaController extends Controller {
    constructor() {
        super(clinicaMedicaServices);
    }
}

module.exports = ClinicaMedicaController;