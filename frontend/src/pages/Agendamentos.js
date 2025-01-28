import axios from "axios";
import { useEffect, useState } from "react";

function Agendamentos() {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState("");
  const [selectedProfissional, setSelectedProfissional] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const buscarUsuarios = async () => {
      const response = await axios.get("http://localhost:5000/usuarios");
      setUsuarios(response.data);
    };
    buscarUsuarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/agendamentos", {
        clienteId: selectedCliente,
        profissionalId: selectedProfissional,
        data: data,
      });
      alert("Agendamento realizado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cliente">Selecione um cliente:</label>
      <select
        id="cliente"
        value={selectedCliente}
        onChange={(e) => setSelectedCliente(e.target.value)}
        required
      >
        <option value="">Selecione</option>
        {usuarios.map(
          (cliente) =>
            cliente.tipo === "cliente" && (
              <option key={cliente._id} value={cliente._id}>
                {cliente.nome}
              </option>
            )
        )}
      </select>
      <label htmlFor="profissional">Selecione um cliente:</label>
      <select
        id="profissional"
        value={selectedProfissional}
        onChange={(e) => setSelectedProfissional(e.target.value)}
        required
      >
        <option value="">Selecione</option>
        {usuarios.map(
          (profissional) =>
            profissional.tipo === "profissional" && (
              <option key={profissional._id} value={profissional._id}>
                {profissional.nome}
              </option>
            )
        )}
      </select>
      <input
        type="datetime-local"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit">Agendar</button>
    </form>
  );
}

export default Agendamentos;
