'use client';
import Title from "@/components/common/Title"

export default function TeamSection() {
  const founders = [
    {
      image: "/images/ceo.jpg",
      name: "Marius Randrianarison",
      role: "CEO - Fondateur"
    },
    {
      image: "/images/equipes/equipe1.jpg",
      name: "Donis Antonio",
      role: "Associé"
    },
    {
      image: "/images/equipes/equipe4.jpg",
      name: "Tiavindrainy Elysé",
      role: "Associé co-fondateur"
    },
    {
      image: "/images/equipes/equipe2.jpg",
      name: "Rado Ramiarinjaona",
      role: "Associé - Directeur Finance"
    }
  ];
  
  const experts = [
    {
      image: "/images/equipes/equipe3.jpg",
      name: "Mario Randrianarison",
      role: "Lead multimédia"
    },
    {
      image: "/images/equipes/Eddy.jpg",
      name: "Eddy Rakotonirina",
      role: "Expert Devops"
    },
    {
      image: "/images/equipes/equipe6.jpg",
      name: "Antonio ANDRIATSIAFORITRARIVO ",
      role: "Développeur"
    },
      {
          image: "/images/equipes/equipe5.jpg",
          name: "Joséphin Sylvère ANDRIANALISOA",
          role: "Développeur"
      }
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <div className="text-center">
            <Title title="Notre équipe"></Title>
        </div>
        
        {/* Section Fondateurs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-8">
            Nos Fondateurs
          </h3>
                    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <div key={index} className="bg-slate-300 rounded-lg overflow-hidden border border-gray-200">
                {/* Image qui occupe toute la largeur avec cover */}
                <div className="w-full h-80 overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                                
                {/* Contenu texte en bas */}
                <div className="p-4 text-center">
                  <p className="font-semibold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-1">
                    {founder.name}
                  </p>
                  <p className="text-sm text-gray-700">
                    {founder.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section Experts IT */}
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-8">
            Nos experts IT
          </h3>
                    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, index) => (
              <div key={index} className="bg-slate-300 rounded-lg overflow-hidden border border-gray-200">
                {/* Image qui occupe toute la largeur avec cover */}
                <div className="w-full h-80 overflow-hidden">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                                
                {/* Contenu texte en bas */}
                <div className="p-4 text-center">
                  <p className="font-semibold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-1">
                    {expert.name}
                  </p>
                  <p className="text-sm text-gray-700">
                    {expert.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}