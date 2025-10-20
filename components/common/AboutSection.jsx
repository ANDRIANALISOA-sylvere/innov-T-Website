'use client';

import useInView from "@/hooks/useInView";

export default function AboutSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section ref={ref} className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div
          className={`bg-gradient-to-r from-blue-800 to-green-600 text-white p-12 rounded-b-xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold">Qui sommes-nous</h2>
        </div>

        {/* Contenu */}
        <div className="p-8">
          <p
            className={`text-gray-700 text-lg leading-relaxed mb-4 transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Nous sommes une équipe passionnée dédiée à l'innovation et à l'excellence. 
            Notre mission est de fournir des solutions sur mesure qui répondent aux défis 
            technologiques de nos clients.
          </p>

          <p
            className={`text-gray-700 text-lg leading-relaxed transition-all duration-1000 delay-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Grâce à notre expertise en développement web, mobile et cloud, nous accompagnons 
            les entreprises dans leur transformation digitale et les aidons à atteindre leurs objectifs.
          </p>
        </div>
      </div>
    </section>
  );
}
