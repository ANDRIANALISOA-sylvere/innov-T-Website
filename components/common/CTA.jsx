'use client';

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden text-white py-20 px-10 flex items-center justify-start"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/bg-hero-section.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ===== Contenu principal ===== */}
      <div className="relative z-10 max-w-3xl text-left">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          Explorer l’univers de nos arts <br />
          <span className="text-green-400">NUMÉRIQUES</span>
        </h2>

        <p className="text-lg text-gray-200 max-w-lg">
          Plongez dans un monde de créativité numérique où chaque œuvre est une nouvelle découverte.
        </p>

        <button className="mt-6 cursor-pointer px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition">
          Découvrir mon projet
        </button>
      </div>

      {/* ===== Globe positionné à droite ===== */}
      <div className="absolute right-42 top-1/2 transform -translate-y-1/2 opacity-80">
        <img
          src="/images/glob.png"
          alt="Globe numérique"
          className="w-[230px] md:w-[320px] object-contain"
        />
      </div>

      {/* ===== Dégradé sombre latéral ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
