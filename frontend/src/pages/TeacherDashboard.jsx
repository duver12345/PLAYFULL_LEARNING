import { useAuth } from "../context/AuthContext";
import { BookOpen, BarChart3, ClipboardList } from "lucide-react";

export default function TeacherDashboard() {
  const { user } = useAuth();

  if (!user || user.role !== "docente") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">🚫 No tienes permiso para acceder.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 drop-shadow-sm">
          👩‍🏫 Panel del profesor
        </h1>
        <p className="text-gray-700 mt-2 text-lg">Bienvenido, <span className="font-semibold">{user.name}</span></p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
          <h2 className="text-lg font-semibold text-gray-800">Tus clases</h2>
          <p className="text-gray-600 text-sm mt-1">Organiza y gestiona tus grupos.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <ClipboardList className="w-8 h-8 text-green-600 mb-3" />
          <h2 className="text-lg font-semibold text-gray-800">Actividades</h2>
          <p className="text-gray-600 text-sm mt-1">Crea tareas y revisa evidencias.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <BarChart3 className="w-8 h-8 text-orange-500 mb-3" />
          <h2 className="text-lg font-semibold text-gray-800">Estadísticas</h2>
          <p className="text-gray-600 text-sm mt-1">Monitorea el progreso de tus estudiantes.</p>
        </div>
      </div>
    </div>
  );
}
