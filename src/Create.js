import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
 const [nome, setNome] = useState('');
 const [email, setEmail] = useState('');
 const navigate = useNavigate();
function handleSubmit (e){
    e.preventDefault();
    axios.post('http://localhost:8081/createEstudante', {nome,email})
    .then(res =>{
        console.log("Dados Salvos");
        navigate('/');
    }).catch(err => console.log(err));
 }
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Estudante</h2>
          <div className="mb-2">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              placeholder="Nome"
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="matricula">Email</label>
            <input
              type="text"
              className="form-control"
              id="Email"
              name="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
