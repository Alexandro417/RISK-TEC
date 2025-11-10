import React from "react";

export default function MyReports() {
  return (
    <div>
      <h2>Mis Reportes</h2>
      <p>Consulta tus reportes registrados.</p>

      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R001</td>
            <td>Extintor sin presión</td>
            <td>Seguridad</td>
            <td>2025-11-07</td>
            <td><span className="badge bg-warning">Pendiente</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
