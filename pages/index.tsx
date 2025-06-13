import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from 'next/dynamic';

// Carga dinámica para la pizarra, para mejorar rendimiento
const TacticalBoard = dynamic(() => import('../components/TacticalBoard'), { ssr: false });

export default function Home() {
  const { data: session } = useSession();
  const [showBoard, setShowBoard] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-darkBg px-4">
      <h1 className="text-4xl font-futuristic text-neonBlue mb-8">⚽ Futbol Táctico AI</h1>

      {!session ? (
        <button
          onClick={() => signIn('google')}
          className="px-6 py-3 bg-neonPink rounded-lg text-black font-bold hover:bg-pink-600 transition"
        >
          Iniciar sesión con Google
        </button>
      ) : (
        <>
          <p className="mb-4">Bienvenido, {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="mb-6 px-6 py-3 bg-neonPink rounded-lg text-black font-bold hover:bg-pink-600 transition"
          >
            Cerrar sesión
          </button>

          <button
            onClick={() => setShowBoard(!showBoard)}
            className="mb-8 px-6 py-3 bg-neonBlue rounded-lg text-black font-bold hover:bg-cyan-600 transition"
          >
            {showBoard ? 'Ocultar' : 'Mostrar'} Pizarra Táctica
          </button>

          {showBoard && <TacticalBoard />}
        </>
      )}
    </main>
  );
}
