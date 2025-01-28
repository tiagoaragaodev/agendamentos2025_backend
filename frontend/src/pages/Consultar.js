import axios from "axios";
import { useEffect, useState } from "react";

function Consultar() {
  const [agendamentos, setAgendamentos] = useState([]);
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto"
  ]  

  useEffect(() => {
    const buscarAgendamentos = async () => {
      const response = await axios.get("http://localhost:5000/agendamentos");
      setAgendamentos(response.data);
    };
    buscarAgendamentos();
  }, []);

  const formatData = (data) => {
    agendamentos.map((a) => {
      const date = new Date(data.slice(0, 9));
      const dia = String(date.getDate()).padStart(2, "0");
      const mes = String(date.getMonth() + 1).padStart(2, "0");
      const ano = date.getFullYear();
    });
  };

  return (
    <div>
      {agendamentos.map((a) => (
        <ul key={a._id}>
          <li>Dia: {new Intl.DateTimeFormat("pt-BR").format(new Date(a.data))}</li>
          <li>Cliente: {a.clienteId.nome}</li>
          <li>Profissional: {a.profissionalId.nome}</li>
        </ul>
      ))}
    </div>
  );
}

export default Consultar;
