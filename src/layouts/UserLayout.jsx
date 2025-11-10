import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaFileAlt,
  FaPlusCircle,
  FaBook,
  FaUser,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-dark text-light d-flex flex-column justify-content-between p-3 transition-all ${
          isCollapsed ? "collapsed-sidebar" : ""
        }`}
        style={{
          width: isCollapsed ? "80px" : "240px",
          minHeight: "100vh",
          transition: "width 0.3s ease",
        }}
      >
        {/* Header */}
        <div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            {!isCollapsed && <h4 className="mb-0">Mi Espacio</h4>}
            <button
              className="btn btn-sm btn-outline-light border-0"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>

          {/* Nav links */}
          <nav className="nav flex-column">
            <SidebarLink to="/user" icon={<FaMapMarkedAlt />} label="Mapa" collapsed={isCollapsed} />
            <SidebarLink to="/user/mis-reportes" icon={<FaFileAlt />} label="Mis reportes" collapsed={isCollapsed} />
            <SidebarLink to="/user/nuevo-reporte" icon={<FaPlusCircle />} label="Nuevo reporte" collapsed={isCollapsed} />
            <SidebarLink to="/user/guias" icon={<FaBook />} label="Guías" collapsed={isCollapsed} />
            <SidebarLink to="/user/perfil" icon={<FaUser />} label="Perfil" collapsed={isCollapsed} />
          </nav>
        </div>

        {/* Footer */}
        <div>
          <hr className="border-secondary" />
          <SidebarLink to="/logout" icon={<FaSignOutAlt />} label="Salir" collapsed={isCollapsed} danger />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow-1 bg-light p-3 p-md-4">
        <Outlet />
      </div>
    </div>
  );
}

/* Componente reutilizable para los enlaces del sidebar */
function SidebarLink({ to, icon, label, collapsed, danger = false }) {
  return (
    <Link
      to={to}
      className={`nav-link d-flex align-items-center gap-2 text-light py-2 px-2 rounded ${
        danger ? "text-danger" : ""
      }`}
      style={{
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
