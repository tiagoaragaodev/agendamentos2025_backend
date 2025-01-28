const mongoose = require("mongoose");

const servicoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,    
    required: true,
  },    
});

module.exports = mongoose.model("Servico", servicoSchema);
