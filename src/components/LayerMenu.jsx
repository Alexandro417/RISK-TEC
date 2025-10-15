import React from "react";

export default function LayerMenu() {
  return (
    <div className="card p-2 mb-2">
      <h6>Capas disponibles</h6>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="zonasSeguras" />
        <label className="form-check-label">Zonas Seguras</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="zonasRiesgo" />
        <label className="form-check-label">Zonas de Riesgo</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="rutas" />
        <label className="form-check-label">Rutas de Evacuación</label>
      </div>
    </div>
  );
}

