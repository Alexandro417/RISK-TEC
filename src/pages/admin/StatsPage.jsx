import React from "react";

export default function StatsPage() {
  return (
    <div>
      <h2>Estadísticas del Sistema</h2>
      <p>Resumen de reportes, zonas de riesgo y usuarios activos.</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Reportes Totales</h5>
              <p className="display-6 text-primary">28</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Zonas de Riesgo</h5>
              <p className="display-6 text-danger">5</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Usuarios Activos</h5>
              <p className="display-6 text-success">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
