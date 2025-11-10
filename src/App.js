import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ReportesPage from "./pages/ReportesPage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";
import UsersPage from "./pages/admin/UsersPage.jsx";
import BuildingsPage from "./pages/admin/BuildingsPage.jsx";
import StatsPage from "./pages/admin/StatsPage.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
import UserHome from "./pages/user/UserHome.jsx";
import MyReports from "./pages/user/MyReports.jsx";
import NewReport from "./pages/user/NewReport.jsx";
import GuidesPage from "./pages/user/GuidesPage.jsx";
import ProfilePage from "./pages/user/ProfilePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<LoginPage />} />

      {/* Rutas generales */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<ReportesPage />} />

      {/* Panel administrador */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="usuarios" element={<UsersPage />} />
        <Route path="edificios" element={<BuildingsPage />} />
        <Route path="reportes" element={<ReportesPage />} />
        <Route path="estadisticas" element={<StatsPage />} />
      </Route>

      {/* Panel usuario */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserHome />} />
        <Route path="mis-reportes" element={<MyReports />} />
        <Route path="nuevo-reporte" element={<NewReport />} />
        <Route path="guias" element={<GuidesPage />} />
        <Route path="perfil" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
