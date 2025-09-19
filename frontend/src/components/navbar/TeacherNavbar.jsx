import { Link } from "react-router-dom";
import { LogOut, BookOpen, User } from "lucide-react";

export default function TeacherNavbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-3 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-extrabold tracking-wide">Profesor</h1>

      <div className="flex items-center gap-6">
        <Link
          to="/teacher/classes"
          className="flex items-center gap-1 hover:text-green-200 transition"
        >
          <BookOpen size={18} /> Clases
        </Link>

        <Link
          to="/teacher/profile"
          className="flex items-center gap-1 hover:text-green-200 transition"
        >
          <User size={18} /> Perfil
        </Link>

      </div>
    </nav>
  );
}
