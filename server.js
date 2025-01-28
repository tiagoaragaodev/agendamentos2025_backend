require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const RotasUsuario = require("./routes/UsuarioRoute");
const RotasAgendamento = require("./routes/AgendamentoRoute");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/", RotasUsuario);
app.use("/", RotasAgendamento);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB conectado!");
    app.listen(PORT, () => console.log(`Servidor rodando na port ${PORT}`));
  })
  .catch((err) => console.log(err));
