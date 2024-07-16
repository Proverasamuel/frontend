import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update() {
  const [student, setStudent] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8081/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:8081/updateEstudante/" + id, { id, nome, email })
      .then((res) => {
        console.log("Dados Salvos");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        {student.map((data, i) => (
          <form onSubmit={handleSubmit} key={i}>
            <h2>Atualizar Estudante</h2>
            <div className="mb-2">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder={data.nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="matricula">Email</label>
              <input
                type="text"
                className="form-control"
                id="Email"
                name="email"
                placeholder={data.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Atualizar</button>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Update;
