const Agendamento = require("../models/Agendamentos");

const AgendamentoControle = {
  async createAgendamento(req, res) {
    try {
      const { clienteId, profissionalId, servicoId, dataHora } = req.body;
            
      //verifica se já existe o agendamento
      const existeAgendamento = await Agendamento.findOne({
        profissionalId,
        dataHora,
      });

      if(existeAgendamento) {
        return res.status(400).json({ msg: "Horário já ocupado! Escolha outro horário." })
      }

      //cria um novo agendamento
      const agendamento = new Agendamento({
        clienteId,
        profissionalId,
        servicoId,
        dataHora,
      });

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
        .populate("profissionalId", "nome")
        .populate("servicoId", "titulo descricao");
      return res.status(201).json(agendamentos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = AgendamentoControle;
