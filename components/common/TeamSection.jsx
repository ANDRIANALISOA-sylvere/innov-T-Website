'use client';

import Title from "@/components/common/Title";
import useInView from "@/hooks/useInView";

export default function TeamSection() {
  const { ref, isInView } = useInView(0.3);

  const founders = [
    { image: "/images/ceo.jpg", name: "Marius Randrianarison", role: "CEO - Fondateur" },
    { image: "/images/equipes/equipe1.jpg", name: "Donis Antonio", role: "Associé" },
    { image: "/images/equipes/equipe4.jpg", name: "Tiavindrainy Elysé", role: "Associé co-fondateur" },
    { image: "/images/equipes/equipe2.jpg", name: "Rado Ramiarinjaona", role: "Associé - Directeur Finance" },
  ];
  
  const experts = [
    { image: "/images/equipes/equipe3.jpg", name: "Mario Randrianarison", role: "Lead multimédia" },
    { image: "/images/equipes/Eddy.jpg", name: "Eddy Rakotonirina", role: "Expert Devops" },
    { image: "/images/equipes/tonio.jpg", name: "Antonio ANDRIATSIAFORITRARIVO", role: "Développeur" },
    { image: "/images/equipes/sylvere.jpg", name: "Joséphin Sylvère ANDRIANALISOA", role: "Développeur" },
  ];

  const renderCard = (person, index) => (
    <div
      key={index}
      className={`bg-slate-300 rounded-lg overflow-hidden border border-gray-200 transition-all duration-1000 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-full h-80 overflow-hidden">
        <img 
          src={person.image} 
          alt={person.name} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-4 text-center">
        <p className="font-semibold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-1">
          {person.name}
        </p>
        <p className="text-sm text-gray-700">{person.role}</p>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-20 bg-gray-50 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <div className={`text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Title title="Notre équipe" />
        </div>
        
        {/* Fondateurs */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Nos Fondateurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map(renderCard)}
          </div>
        </div>

        {/* Experts IT */}
        <div>
          <h3 className={`text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Nos experts IT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
