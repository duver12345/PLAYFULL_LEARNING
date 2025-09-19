// src/pages/StudentDashboard.jsx
import { useAuth } from "../context/AuthContext";

export default function StudentDashboard() {
  const { user } = useAuth();

  if (!user || user.role !== "estudiante") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-pink-200">
        <p className="text-red-600 text-xl font-semibold animate-pulse">
          🚪 No tienes permiso para acceder a este panel.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-sm">
          🎓 Panel de Estudiante
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Bienvenido{" "}
          <span className="font-bold text-purple-600">{user.name}</span>.
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-tr from-indigo-500 to-indigo-700 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold">Clases</h2>
          <p className="mt-2 text-indigo-100">
            Revisa tus próximas clases y horarios.
          </p>
          <span className="mt-6 block text-4xl font-bold">8</span>
        </div>

        <div className="bg-gradient-to-tr from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold">Evidencias</h2>
          <p className="mt-2 text-purple-100">
            Verifica tus tareas y trabajos pendientes.
          </p>
          <span className="mt-6 block text-4xl font-bold">5</span>
        </div>

        <div className="bg-gradient-to-tr from-yellow-400 to-orange-500 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-2xl font-semibold">Braincoins</h2>
          <p className="mt-2 text-yellow-100">
            Moneda que acumulas por buen rendimiento.
          </p>
          <span className="mt-6 block text-4xl font-bold">120</span>
        </div>
      </div>

      {/* Actividades */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-indigo-200 inline-block pb-1">
          📌 Últimas actividades
        </h2>
        <ul className="bg-white shadow-lg rounded-2xl divide-y divide-gray-200">
          <li className="p-5 hover:bg-indigo-50 transition-colors">
            ✅ Entregaste <span className="font-medium">"Tarea de matemáticas"</span>{" "}
            - 20/08/2025
          </li>
          <li className="p-5 hover:bg-indigo-50 transition-colors">
            💰 Recibiste <span className="font-medium">10 Braincoins</span> por
            asistencia
          </li>
          <li className="p-5 hover:bg-indigo-50 transition-colors">
            📖 Nueva clase: <span className="font-medium">Historia</span> - 25/08/2025
          </li>
        </ul>
      </section>
    </div>
  );
}
