export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">👤 Mi Perfil</h1>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-lg">
        <p className="text-gray-700"><span className="font-semibold">Nombre:</span> Juan Pérez</p>
        <p className="text-gray-700 mt-2"><span className="font-semibold">Correo:</span> juan@example.com</p>
        <p className="text-gray-700 mt-2"><span className="font-semibold">Rol:</span> Estudiante</p>

        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Editar Perfil
        </button>
      </div>
    </div>
  );
}
