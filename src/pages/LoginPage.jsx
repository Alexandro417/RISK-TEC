import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "22rem" }}>
        <h4 className="text-center mb-3">Mapa de Riesgos - Campus</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" placeholder="Usuario" />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
