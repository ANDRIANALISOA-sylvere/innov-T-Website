'use client';

import Title from '@/components/common/Title';
import useInView from '@/hooks/useInView';

export default function WhyChoose() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section ref={ref} className="py-20 bg-white px-6 overflow-hidden">
      {/* ===== Titre principal ===== */}
      <div
        className={`text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Title title="Pourquoi choisir Innov-T" />
      </div>

      {/* ===== Cartes ===== */}
      <div
        className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* ---- Carte 1 ---- */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent mb-3">
            + 50 Ingénieurs Développeurs
          </h3>
          <p className="text-gray-600">
            Une équipe d’experts passionnés, spécialisés dans plusieurs technologies modernes pour donner vie à vos projets.
          </p>
        </div>

        {/* ---- Carte 2 ---- */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 delay-100">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent mb-3">
            Fuseaux horaires flexibles
          </h3>
          <p className="text-gray-600">
            Nous travaillons selon vos disponibilités pour assurer une communication fluide et un suivi continu du projet.
          </p>
        </div>

        {/* ---- Carte 3 ---- */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 delay-200">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent mb-3">
            Bilingue et AGILE
          </h3>
          <p className="text-gray-600">
            Nos équipes maîtrisent le français et l’anglais, et appliquent la méthodologie Agile pour livrer rapidement des résultats.
          </p>
        </div>
      </div>

      {/* ===== Boutons ===== */}
      <div
        className={`flex flex-col sm:flex-row justify-center gap-4 mt-12 transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button className="px-8 py-3 cursor-pointer bg-blue-900 hover:bg-blue-800 text-white rounded-full font-semibold transition-all duration-300">
          Découvrir nos projets
        </button>
        <button className="px-8 py-3 cursor-pointer bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300">
          Je veux une équipe
        </button>
      </div>
    </section>
  );
}
