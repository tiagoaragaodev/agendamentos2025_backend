const express = require("express");
const Usuario = require("../models/Usuarios");
const UsuarioControle = require('../controllers/UsuarioControle')

const router = express.Router();

router.post("/usuarios", UsuarioControle.createUsuario);

router.get('/usuarios', UsuarioControle.getAllUsuarios)

router.get("/profissional", UsuarioControle.getProfissional);

router.get("/cliente", UsuarioControle.getCliente);


module.exports = router;
