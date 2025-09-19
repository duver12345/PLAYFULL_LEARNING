import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Panel Admin</h1>
      <div className="flex gap-4">
        <Link to="/admin" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/admin/users" className="hover:text-gray-300">
          Usuarios
        </Link>
        <Link to="/admin/settings" className="hover:text-gray-300">
          Configuración
        </Link>
      </div>
    </nav>
  );
}
