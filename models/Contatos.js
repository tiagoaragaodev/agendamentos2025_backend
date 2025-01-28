const mongoose = require("mongoose");

const contatoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  tipo: { type: String, enum: ["celular", "email", "fixo"], required: true },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
