import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";   // 👈 AÑADIDO
import loginImg from "../../Images/login.png";

export default function LoginPage() {
  return (
    <div className="d-flex vh-100">

      {/* IZQUIERDA: PANEL DE FORMULARIO */}
      <div className="d-flex flex-column justify-content-center w-50 px-5">

        <div style={{ maxWidth: "380px", marginLeft: "auto", marginRight: "auto" }}>
          <h1 className="mb-4 fw-bold text-center">Inicia sesión</h1>

          <form>

            <div className="mb-3">
              <label className="form-label fw-semibold">Correo electrónico</label>
              <input
                type="text"
                className="form-control rounded-3 p-2"
                placeholder="nombre@correo.com"
                style={{ borderColor: "#d1d1d1" }}
              />
            </div>

            <div className="mb-2">
              <label className="form-label fw-semibold">Contraseña</label>
              <input
                type="password"
                className="form-control rounded-3 p-2"
                placeholder="********"
                style={{ borderColor: "#d1d1d1" }}
              />
            </div>

            <div className="text-end mb-4">
              <button 
                type="button" 
                className="btn btn-link p-0 small text-primary text-decoration-none border-0"
                style={{ background: 'none' }}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="btn w-100 rounded-4 py-2 fw-semibold"
              style={{
                backgroundColor: "#000",
                color: "white",
                fontSize: "1rem",
              }}
            >
              Iniciar sesión
            </button>

          </form>

          <p className="text-center mt-4 small text-muted">
            ¿Aún no tienes cuenta?{" "}
            <Link 
              to="/register" 
              className="text-primary fw-semibold text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              Regístrate
            </Link>
          </p>
        </div>

      </div>

      {/* DERECHA: IMAGEN */}
      <div
        className="w-50 d-none d-md-block"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px 0 0 20px",
        }}
      ></div>

    </div>
  );
}
