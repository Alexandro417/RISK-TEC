import React from 'react';

const AdminHome = () => {
  return (
    <div className="container-fluid">
      <h1>Panel de Administración</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Usuarios</h5>
              <p className="card-text">150 usuarios registrados</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Reportes</h5>
              <p className="card-text">45 reportes activos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Edificios</h5>
              <p className="card-text">12 edificios monitoreados</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Alertas</h5>
              <p className="card-text">3 alertas activas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
