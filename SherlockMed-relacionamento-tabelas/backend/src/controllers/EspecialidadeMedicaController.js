const Controller = require('./Controller.js');
const EspecialidadeMedicaServices = require('../services/EspecialidadeMedica.js')

const especialidadeMedicaServices = new EspecialidadeMedicaServices();

class EspecialidadeMedicaController extends Controller {
    constructor() {
        super(especialidadeMedicaServices);
    }
}

module.exports = EspecialidadeMedicaController;