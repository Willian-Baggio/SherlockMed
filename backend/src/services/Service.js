const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);
    }

    async criaRegristro(novoRegistroCriado) {
        return dataSource[this.model].create(novoRegistroCriado);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (listaDeRegistrosAtualizados[0] == 0) {
            return false
        }
        return true
    }

    // async excluiRegistro(id) {
    //     return dataSource[this.model].destroy({ where: { id: id } });
    // }

    async excluiRegistro(id) {
        try {
            const registro = dataSource[this.model].findByPk(id);
            if (!registro) {
                return false
            }
            await dataSource[this.model].update({ ativo: false }, {
                where: { id: id }
            });

            return registro;
        } catch (erro) {
            erro
        }
    }
}

module.exports = Services;