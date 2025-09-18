import { Link } from "react-router-dom";

export default function AuthLayout({
  tituloIzq,
  subtituloIzq,
  linkIzq,
  textoLinkIzq,
  tituloDer,
  subtituloDer,
  children,
  linkAbajo,
  textoLinkAbajo,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="grid md:grid-cols-2 w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden">

        {/* IZQUIERDA */}
        <div className="bg-purple-600 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold">{tituloIzq}</h2>
          <p className="mt-3">{subtituloIzq}</p>
          <Link
            to={linkIzq}
            className="mt-6 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl shadow hover:bg-gray-100 transition"
          >
            {textoLinkIzq}
          </Link>
        </div>

        {/* DERECHA */}
        <div className="flex flex-col justify-center p-10">
          <h1 className="text-3xl font-bold text-purple-700 text-center">
            {tituloDer}
          </h1>
          <p className="text-gray-500 text-center mt-2">{subtituloDer}</p>

          {/* Aquí va el formulario */}
          {children}

          {/* Link abajo */}
          {linkAbajo && (
            <Link
              to={linkAbajo}
              className="block mt-6 text-purple-600 font-semibold hover:underline text-center"
            >
              {textoLinkAbajo}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
