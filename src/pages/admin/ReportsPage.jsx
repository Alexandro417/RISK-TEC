import React from "react";

function ReportsPage() {
  return (
    <div>
      <h2>Gestión de Reportes</h2>
      <p>Aquí puedes revisar, filtrar o eliminar reportes de riesgo.</p>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo de Riesgo</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fuga de gas</td>
            <td>Incendio</td>
            <td>Se detectó olor a gas en edificio A</td>
            <td><img src="/img/gas.jpg" width="60" alt="Imagen del reporte de fuga de gas" /></td>
            <td>
              <button className="btn btn-sm btn-success me-2">Atendido</button>
              <button className="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ReportsPage;
