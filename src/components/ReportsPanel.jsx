import React from "react";

export default function ReportsPanel() {
  return (
    <div className="card p-2">
      <h6>Reportes Ciudadanos</h6>
      <button className="btn btn-outline-primary w-100 mb-2">
        Nuevo Reporte
      </button>
      <button className="btn btn-outline-secondary w-100">
        Ver Historial
      </button>
    </div>
  );
}
