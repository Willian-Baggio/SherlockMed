const Controller = require('./Controller.js');
const EspecialidadeServices = require('../services/EspecialidadeServices.js');

const especialidadeServices = new EspecialidadeServices();

class EspecialidadeController extends Controller {
    constructor() {
        super(especialidadeServices);
    }
}

module.exports = EspecialidadeController;