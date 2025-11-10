import React from "react";

export default function BuildingsPage() {
  return (
    <div>
      <h2>Gestión de Edificios</h2>
      <p>Aquí el administrador podrá ver, agregar y editar los edificios del campus.</p>

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Niveles</th>
            <th>Zona</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Edificio A</td>
            <td>3</td>
            <td>Norte</td>
            <td>
              <button className="btn btn-sm btn-primary me-2">Editar</button>
              <button className="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
