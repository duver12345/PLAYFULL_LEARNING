export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">📚 Mis Cursos</h1>

      {/* Cursos de ejemplo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Matemáticas</h2>
          <p className="text-gray-600 mt-2">Accede al material de álgebra, geometría y más.</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800">Lengua y Literatura</h2>
          <p className="text-gray-600 mt-2">Lecturas, análisis de textos y escritura.</p>
        </div>
      </div>
    </div>
  );
}
