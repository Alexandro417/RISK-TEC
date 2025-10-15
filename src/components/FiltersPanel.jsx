import React from "react";

export default function FiltersPanel() {
  return (
    <div className="card p-2 mb-2">
      <h6>Filtros</h6>
      <select className="form-select mb-2">
        <option>Todos los edificios</option>
        <option>Edificio A</option>
        <option>Edificio B</option>
      </select>
      <select className="form-select">
        <option>Todos los niveles de riesgo</option>
        <option>Bajo</option>
        <option>Medio</option>
        <option>Alto</option>
      </select>
    </div>
  );
}
