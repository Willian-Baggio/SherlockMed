const Controller = require('./Controller.js');
const ConvenioServices = require('../services/ConvenioServices.js');

const convenioServices = new ConvenioServices();

class ConvenioController extends Controller {
    constructor() {
        super(convenioServices);
    }
}

module.exports = ConvenioController;