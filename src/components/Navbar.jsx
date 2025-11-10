import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Map, FileText, BookOpen, LogOut } from "lucide-react";

export default function Navbar({ role = "user" }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3 px-md-4 py-2 sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          🗺️ <span className="d-none d-sm-inline">RISKTEC</span>
        </Link>

        {/* Botón toggle (para móviles) */}
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

        {/* Menú principal */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Enlaces comunes */}
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link d-flex align-items-center gap-2">
                <Map size={18} /> <span className="d-none d-md-inline">Mapa</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reports" className="nav-link d-flex align-items-center gap-2">
                <FileText size={18} /> <span className="d-none d-md-inline">Reportes</span>
              </NavLink>
            </li>
            {role === "user" && (
              <li className="nav-item">
                <NavLink to="/help" className="nav-link d-flex align-items-center gap-2">
                  <BookOpen size={18} /> <span className="d-none d-md-inline">Manual</span>
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link text-danger d-flex align-items-center gap-2">
                <LogOut size={18} /> <span className="d-none d-md-inline">Salir</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
