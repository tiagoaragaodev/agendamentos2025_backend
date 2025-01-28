const Contatos = require("../models/Contatos");

const ContatosControle = {
  async createContato(req, res) {
    const { descricao, tipo, usuarioId } = req.body;

    try {
      const contatos= new Contatos({ descricao, tipo, usuarioId });
      await contatos.save();
      res.status(201).json(contatos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getContatosPorUsuario(req, res) {
    const { usuarioId } = req.params;
    try {
      const contato = await Contatos.findById({ usuarioId });
      return res.status(201).json(contato);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar ususarios:", error });
    }
  },
};

module.exports = ContatosControle;
