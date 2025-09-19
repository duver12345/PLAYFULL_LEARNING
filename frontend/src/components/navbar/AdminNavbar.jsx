import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function AdminNavbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo / título */}
      <h1 className="text-xl font-bold text-purple-700">Panel de Administración</h1>

      {/* Enlaces */}
      <div className="flex gap-6 text-gray-700">
        <Link
          to="/admin"
          className="hover:text-purple-600 transition font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/users"
          className="hover:text-purple-600 transition font-medium"
        >
          Usuarios
        </Link>
        <Link
          to="/admin/settings"
          className="hover:text-purple-600 transition font-medium"
        >
          Configuración
        </Link>
      </div>

      {/* Botón logout */}
      <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
        <LogOut size={18} /> Salir
      </button>
    </nav>
  );
}
