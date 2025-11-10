import React from "react";
import {
  Home,
  Map,
  FileText,
  Users,
  Building2,
  BarChart3,
  AlertTriangle,
  BookOpen,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ role = "admin", isOpen, onClose }) {
  const location = useLocation();

  const adminLinks = [
    { to: "/admin/home", label: "Dashboard", icon: <Home size={20} /> },
    { to: "/admin/users", label: "Usuarios", icon: <Users size={20} /> },
    { to: "/admin/buildings", label: "Edificios", icon: <Building2 size={20} /> },
    { to: "/admin/reports", label: "Reportes", icon: <FileText size={20} /> },
    { to: "/admin/stats", label: "Estadísticas", icon: <BarChart3 size={20} /> },
  ];

  const userLinks = [
    { to: "/user/home", label: "Mapa", icon: <Map size={20} /> },
    { to: "/user/myreports", label: "Mis reportes", icon: <FileText size={20} /> },
    { to: "/user/newreport", label: "Nuevo reporte", icon: <AlertTriangle size={20} /> },
    { to: "/user/guides", label: "Guías", icon: <BookOpen size={20} /> },
  ];

  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="nav flex-column mt-3">
        {links.map((link, i) => (
          <li key={i} className="nav-item">
            <Link
              to={link.to}
              className={`nav-link d-flex align-items-center gap-2 ${
                location.pathname === link.to ? "active" : ""
              }`}
              onClick={onClose}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto sidebar-footer">
        <Link
          to="/logout"
          className="nav-link text-danger d-flex align-items-center gap-2"
        >
          <LogOut size={20} />
          <span>Salir</span>
        </Link>
      </div>
    </div>
  );
}
