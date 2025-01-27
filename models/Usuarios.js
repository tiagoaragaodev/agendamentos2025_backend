const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  tipo: { type: String, enum: ["cliente", "profissional"], required: true },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
