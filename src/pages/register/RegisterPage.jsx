import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      {/* CARD */}
      <div
        className="p-4 shadow rounded-4 bg-white"
        style={{ width: "420px" }}
      >
        <h2 className="text-center fw-bold mb-2">Crea tu cuenta</h2>
        <p className="text-center text-muted mb-4">
          Regístrate para comenzar a usar la plataforma.
        </p>

        {/* FORM */}
        <form>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control p-2 rounded-3"
              placeholder="nombre@correo.com"
            />
          </div>

          {/* Confirm Email */}
          <div className="mb-3">
            <label className="form-label">Confirmar correo</label>
            <input
              type="email"
              className="form-control p-2 rounded-3"
              placeholder="Confirma tu correo"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <input
                type={showPass ? "text" : "password"}
                className="form-control p-2 rounded-start-3"
                placeholder="Introduce una contraseña"
              />
              <button
                type="button"
                className="btn btn-outline-secondary rounded-end-3"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="terms" />
            <label className="form-check-label small text-muted" htmlFor="terms">
              Acepto el Aviso de Privacidad y las Condiciones de Uso.
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn w-100 py-2 rounded-4 fw-semibold"
            style={{ backgroundColor: "#000", color: "white" }}
          >
            Crear cuenta
          </button>
        </form>

        {/* Go to login */}
        <p className="text-center mt-4 small text-muted">
          ¿Ya tienes cuenta?{" "}
          <a href="/loginpage" className="text-primary fw-semibold text-decoration-none">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
