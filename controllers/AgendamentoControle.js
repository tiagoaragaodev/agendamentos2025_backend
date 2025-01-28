const Agendamento = require("../models/Agendamentos");

const AgendamentoControle = {
  async createAgendamento(req, res) {
    const { clienteId, profissionalId, data } = req.body;

    try {
      const agendamento = new Agendamento({ clienteId, profissionalId, data });
      await agendamento.save();
      res.status(201).json(agendamento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getAllAgendamentos(req, res) {
    try {
      const agendamentos = await Agendamento.find()
        .populate("clienteId", "nome endereco")
        .populate("profissionalId", "nome");
      return res.status(201).json(agendamentos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = AgendamentoControle;
