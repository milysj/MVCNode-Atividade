class VeiculoModel {
    constructor() {
        // Simulação de banco de dados em memória
        this.veiculos = [
            { id: 1, modelo: "Fusca", marca: "Volkswagen", ano: 1975 },
            { id: 2, modelo: "Uno", marca: "Fiat", ano: 1995 },
            { id: 3, modelo: "Civic", marca: "Honda", ano: 2020 },
            { id: 4, modelo: "Corolla", marca: "Toyota", ano: 2021 }
        ];
        this.nextId = 5;
    }

    listarTodos() {
        return this.veiculos;
    }

    adicionar(veiculo) {
        veiculo.id = this.nextId++;
        this.veiculos.push(veiculo);
    }

    excluir(id) {
        this.veiculos = this.veiculos.filter(v => v.id !== Number(id));
    }

    editar(id, novosDados) {
        const index = this.veiculos.findIndex(v => v.id === Number(id));
        if (index !== -1) {
            this.veiculos[index] = { ...this.veiculos[index], ...novosDados };
        }
    }

    buscarPorId(id) {
        return this.veiculos.find(v => v.id === Number(id));
    }
}

module.exports = new VeiculoModel();