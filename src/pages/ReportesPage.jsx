import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function ReportesPage() {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    tipoRiesgo: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Reporte registrado (simulado)");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card shadow p-4">
          <h4 className="mb-3">Nuevo Reporte de Riesgo</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Título del reporte</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                name="descripcion"
                rows="3"
                value={formData.descripcion}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Tipo de riesgo</label>
              <select
                className="form-select"
                name="tipoRiesgo"
                value={formData.tipoRiesgo}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar...</option>
                <option value="bajo">Bajo</option>
                <option value="medio">Medio</option>
                <option value="alto">Alto</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Evidencia fotográfica</label>
              <input
                type="file"
                className="form-control"
                name="imagen"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Enviar Reporte
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
