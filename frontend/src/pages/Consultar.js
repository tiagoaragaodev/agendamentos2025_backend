import axios from "axios";
import { useEffect, useState } from "react";

function Consultar() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const buscarAgendamentos = async () => {
      const response = await axios.get("http://localhost:5000/agendamentos");
      setAgendamentos(response.data);
    };
    buscarAgendamentos();
  }, []);

  return (
    <div>
      {agendamentos.map((a) => (
        <ul key={a._id}>
          <li>
            Dia: {new Intl.DateTimeFormat("pt-BR").format(new Date(a.data))}
          </li>
          <li>Horário: {a.data.slice(11,16)} horas</li>
          <li>Cliente: {a.clienteId.nome}</li>
          <li>Servico: {a.servicoId.titulo}</li>
          <label>Descrição do serviço</label>
          <li>
            <p>{a.servicoId.descricao}</p>
          </li>
          <li>Profissional: {a.profissionalId.nome}</li>
        </ul>
      ))}
    </div>
  );
}

export default Consultar;
