import { Link } from "react-router-dom";
import { Home, BookOpen, User, LogOut } from "lucide-react";

export default function StudentNavbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 shadow-md flex items-center justify-between rounded-b-2xl">
      <h1 className="text-xl font-extrabold tracking-wide cursor-default">
         Estudiante
      </h1>

      <div className="flex items-center gap-6">

        <Link
          to="/student/courses"
          className="flex items-center gap-1 hover:text-yellow-300 transition"
        >
          <BookOpen size={18} /> Cursos
        </Link>

        <Link
          to="/student/profile"
          className="flex items-center gap-1 hover:text-yellow-300 transition"
        >
          <User size={18} /> Perfil
        </Link>

      </div>
    </nav>
  );
}
