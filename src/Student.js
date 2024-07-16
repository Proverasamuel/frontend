import React, { useEffect } from "react";
import {  Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

function Student() {

  const [student, setStudent] = useState([]);
  const handleDelete = async(id) => {
   try {
    await Axios.delete(`http://localhost:8081/delete/${id}`)
    window.location.reload();
   } catch(err){
      console.log(err);
   }
  }

  useEffect(() => {
    Axios.get("http://localhost:8081/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-50 h-50 bg-white rounded p-3 ">
      <Link to="/create" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.nome}</td>
                <td>{data.email}</td>
                <td>
                  <Link to={`/update/${data.id}`} className="btn btn-primary">Update</Link>
                  <Link className="btn btn-danger" onClick={e => handleDelete(data.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
