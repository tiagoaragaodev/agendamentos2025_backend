const Usuario = require("../models/Usuarios");

const UsuarioControle = {
  async createUsuario(req, res) {
    const { nome, endereco, tipo } = req.body;

    try {
      const usuario = new Usuario({ nome, endereco, tipo });
      await usuario.save();
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getAllUsuarios(req, res) {
    try {
      const usuarios = await Usuario.find();
      return res.status(201).json(usuarios);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar ususarios:", error });
    }
  },
  async getProfissional(req, res) {
    try {
      const usuarios = await Usuario.find({ tipo: "profissional" });
      return res.status(201).json(usuarios[0]);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar ususarios:", error });
    }
  },
  async getCliente(req, res) {
    try {
      const usuarios = await Usuario.find({ tipo: "cliente" });
      return res.status(201).json(usuarios[0]);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Erro ao buscar ususarios:", error });
    }
  },
};

module.exports = UsuarioControle;
