'use client';
import Title from "@/components/common/Title";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== HERO ===== */}
      <div
        className="relative flex flex-col items-center justify-center text-center text-white py-32 px-6"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/bg-hero-section.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Propulsez Votre Entreprise vers<br />
          L’<span className="text-green-400">Innovation</span> Technologique
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-8 cursor-pointer py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full font-semibold transition">
            Découvrir nos projets
          </button>
          <button className="px-8 cursor-pointer py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition">
            Je veux une équipe
          </button>
        </div>
      </div>

      {/* ===== BLOC STATS ===== */}
      <div className="flex justify-center relative z-20">
        <div className="w-3/4 bg-white rounded-2xl shadow-xl -mt-20 py-10 px-6 text-center">
          <Title title="Innov-T en chiffre"></Title>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-200">
            <div className="px-4">
              <p className="text-4xl font-extrabold text-green-600">+80</p>
              <p className="text-gray-700 mt-2 font-medium">Projets réalisés</p>
            </div>

            <div className="px-4">
              <p className="text-4xl font-extrabold text-green-600">+30</p>
              <p className="text-gray-700 mt-2 font-medium">Collaborateurs</p>
            </div>

            <div className="px-4">
              <p className="text-4xl font-extrabold text-green-600">+20</p>
              <p className="text-gray-700 mt-2 font-medium">Clients</p>
            </div>

            <div className="px-4">
              <p className="text-4xl font-extrabold text-green-600">+10</p>
              <p className="text-gray-700 mt-2 font-medium">Partenaires</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION BLANCHE EN DESSOUS ===== */}
      <div className="bg-white h-[120px]" />
    </section>
  );
}
