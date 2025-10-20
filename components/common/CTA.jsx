'use client';

import { useState, useEffect } from "react";

export default function CTA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className={`relative overflow-hidden text-white py-20 px-10 flex items-center justify-start transition-all duration-1000 ${
        isMounted ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/bg-hero-section.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* ===== Contenu principal ===== */}
      <div className={`relative z-10 max-w-3xl text-left transition-all duration-700 delay-300 ${
        isMounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
      }`}>
        <h2 className={`text-4xl md:text-4xl font-bold leading-tight mb-2 monument transition-all duration-700 delay-500 ${
          isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Explorer l'univers de nos arts <br />
          <span className={`text-green-400 inline-block transition-all duration-700 delay-700 ${
            isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
          }`}>
            NUMERIQUES
          </span>
        </h2>

        <p className={`text-lg text-gray-200 max-w-lg transition-all duration-700 delay-800 ${
          isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Plongez dans un monde de créativité numérique où chaque œuvre est une nouvelle découverte.
        </p>

        <button className={`mt-6 cursor-pointer px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 delay-900 ${
          isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        } hover:scale-105`}>
          Découvrir mon projet
        </button>
      </div>

      {/* ===== Globe positionné à droite ===== */}
      <div className={`absolute right-90 top-1/2 transform -translate-y-1/2 opacity-80 transition-all duration-1000 delay-1000 ${
        isMounted ? 'translate-x-0 opacity-80 scale-100' : 'translate-x-20 opacity-0 scale-110'
      }`}>
        <img
          src="/images/glob.png"
          alt="Globe numérique"
          className="w-[100px] md:w-[250px] object-contain transition-transform duration-1000 hover:scale-110"
        />
      </div>

      {/* ===== Dégradé sombre latéral ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}