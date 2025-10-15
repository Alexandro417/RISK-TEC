import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
      <div className="container-fluid">
        {/* Logo / título */}
        <Link className="navbar-brand fw-bold" to="/">
          🗺️ RISKMAP
        </Link>

        {/* Botón toggle responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces del menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeclassname="active"
              >
                Mapa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/reports"
                className="nav-link"
                activeclassname="active"
              >
                Reportes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/help"
                className="nav-link"
                activeclassname="active"
              >
                Manual
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logout"
                className="nav-link text-danger fw-semibold"
              >
                Salir
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
