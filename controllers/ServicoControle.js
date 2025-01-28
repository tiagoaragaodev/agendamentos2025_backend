const Servicos = require("../models/Servicos");

const ServicosControle = {
  async createServico(req, res) {
    const { titulo, descricao } = req.body;

    try {
      const servico = new Servicos({ titulo, descricao });
      await servico.save();
      res.status(201).json(servico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getAllServicos(req, res) {
    try {
      const servicos = await Servicos.find();
      return res.status(201).json(servicos);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar ususarios:", error });
    }
  },
};

module.exports = ServicosControle;
