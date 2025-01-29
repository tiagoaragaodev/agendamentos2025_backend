const mongoose = require("mongoose");

const agendamentoSchema = new mongoose.Schema({
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  profissionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  servicoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Servico",
    required: true,
  },
  dataHora: { type: Date, required: true, unique: true },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Agendamento", agendamentoSchema);
