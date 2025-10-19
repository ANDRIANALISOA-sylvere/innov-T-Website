'use client';

export default function AboutSection() {
  return (
    <section className="bg-gray-100"> 
      <div className="max-w-6xl mx-auto">
        {/* Div avec dégradé et texte à gauche */}
        <div className="bg-gradient-to-r from-blue-800 to-green-600 text-white p-12 rounded-b-xl rounded-t-none"> {/* rounded-b-xl rounded-t-none */}
          <h2 className="text-3xl font-bold">
            Qui sommes nous
          </h2>
        </div>
        
        {/* Contenu texte en dessous */}
        <div className="p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Nous sommes une équipe passionnée dédiée à l'innovation et à l'excellence. 
            Notre mission est de fournir des solutions sur mesure qui répondent aux défis 
            technologiques de nos clients.
          </p>
        </div>
      </div>
    </section>
  );
}