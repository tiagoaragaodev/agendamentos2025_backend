const express = require("express");
const Agendamento = require("../models/Agendamentos");
const AgendamentoControle = require('../controllers/AgendamentoControle')

const router = express.Router();

router.post("/agendamentos", AgendamentoControle.createAgendamento);

router.get("/agendamentos", AgendamentoControle.getAllAgendamentos);

module.exports = router;
