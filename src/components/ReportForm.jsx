import React, { useState } from "react";

export default function ReportForm() {
  const [form, setForm] = useState({ titulo: "", descripcion: "", imagen: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reporte enviado:", form);
  };

  return (
    <div className="card p-4">
      <h5>Nuevo Reporte de Incidencia</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            rows="3"
            value={form.descripcion}
            onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setForm({ ...form, imagen: e.target.files[0] })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar Reporte</button>
      </form>
    </div>
  );
}
