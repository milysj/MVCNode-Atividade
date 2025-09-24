const veiculoModel = require('../models/VeiculoModel');

exports.listar = (req, res) => {
    res.render('VeiculoListView', { veiculos: veiculoModel.listarTodos() });
};

exports.formNovo = (req, res) => {
    res.render('VeiculoFormView', { veiculo: null });
};

exports.salvarNovo = (req, res) => {
    veiculoModel.adicionar({
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano
    });
    res.redirect('/veiculos');
};

exports.formEditar = (req, res) => {
    const veiculo = veiculoModel.buscarPorId(req.params.id);
    res.render('VeiculoFormView', { veiculo });
};

exports.salvarEdicao = (req, res) => {
    veiculoModel.editar(req.params.id, {
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano
    });
    res.redirect('/veiculos');
};

exports.excluir = (req, res) => {
    veiculoModel.excluir(req.params.id);
    res.redirect('/veiculos');
};