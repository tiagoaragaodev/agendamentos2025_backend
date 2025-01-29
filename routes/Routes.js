const express = require("express");
/* CONTROLES */
//agendamentos
const AgendamentoControle = require('../controllers/AgendamentoControle')
//servicos
const ServicoControle = require("../controllers/ServicoControle")
//usuarios
const UsuarioControle = require('../controllers/UsuarioControle')
//contatos
const ContatoControle = require('../controllers/ContatoControle')

const router = express.Router();

//rotas de agendamento
router.post("/agendamentos", AgendamentoControle.createAgendamento);
router.get("/agendamentos", AgendamentoControle.getAllAgendamentos);

//rotas de usuarios
router.post("/usuarios", UsuarioControle.createUsuario);
router.get('/usuarios', UsuarioControle.getAllUsuarios)
router.get("/profissional", UsuarioControle.getProfissional);
router.get("/cliente", UsuarioControle.getCliente);

//rotas de servicos
router.post("/servicos", ServicoControle.createServico)
router.get("/servicos", ServicoControle.getAllServicos)

//rotas de contatos
router.post("/contatos", ContatoControle.createContato)
router.get("/contatos", ContatoControle.getContatosPorUsuario)

module.exports = router;
