import React from "react";

export default function NewReport() {
  return (
    <div>
      <h2>Nuevo Reporte</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" placeholder="Ej. Fuga de agua" />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" rows="3" placeholder="Describe brevemente el incidente"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de Riesgo</label>
          <select className="form-select">
            <option>Eléctrico</option>
            <option>Incendio</option>
            <option>Infraestructura</option>
            <option>Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input type="file" className="form-control" />
        </div>

        <button className="btn btn-primary">Enviar Reporte</button>
      </form>
    </div>
  );
}
