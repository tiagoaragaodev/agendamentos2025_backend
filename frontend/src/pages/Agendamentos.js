import axios from "axios";
import { useEffect, useState } from "react";

function Agendamentos() {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState("");
  const [servicos, setServicos] = useState([]);
  const [selectedServico, setSelectedServico] = useState("");
  const [selectedProfissional, setSelectedProfissional] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const buscarUsuarios = async () => {
      const response = await axios.get("http://localhost:5000/usuarios");
      setUsuarios(response.data);
      await axios.get("http://localhost:5000/servicos").then((servicos) => {
        setServicos(servicos.data);
      });
    };
    buscarUsuarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const horario = await axios
        .get("http://localhost:5000/agendamentos")
        .then((res) => {
          const agendamento = res.data;
          agendamento.map((m) => {
            if (m.data === data) {
              alert(
                `O horário das ${m.data.slice(
                  11,
                  16
                )} no dia ${new Intl.DateTimeFormat("pt-BR").format(
                  new Date(m.data)
                )} está indisponivel`
              );
            } else {
              alert("agendado");
            }
          });

          // if (agendamento === data) {
          //   alert("Horário insdisponível:", agendamento);
          // } else {
          //   // axios.post("http://localhost:5000/agendamentos", {
          //   //   clienteId: selectedCliente,
          //   //   profissionalId: selectedProfissional,
          //   //   data: data,
          //   // });
          //   alert("Agendamento realizado com sucesso!");
          // }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cliente">Selecione o cliente:</label>
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
      <label htmlFor="cliente">Selecione o serviço:</label>
      <select
        id="servico"
        value={selectedServico}
        onChange={(e) => setSelectedServico(e.target.value)}
        required
      >
        <option value="">Selecione</option>
        {servicos.map((servico) => (
          <option key={servico._id} value={servico._id}>
            {servico.titulo}
          </option>
        ))}
      </select>
      <label htmlFor="profissional">Selecione o profissional:</label>
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
      <label>Data:</label>
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
