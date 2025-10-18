'use client';
import Title from "@/components/common/Title"
export default function TeamSection() {
  const founders = [
    {
      image: "/images/ceo.jpg",
      name: "Marius Randrianarison",
      role: "CEO Fondateur"
    },
    {
      image: "/images/equipes/equipe1.jpg",
      name: "Jean Dupont",
      role: "Associé"
    },
    {
      image: "/images/equipes/equipe2.jpg",
      name: "Marie Laurent",
      role: "Associé co-fondateur"
    },
    {
      image: "/images/equipes/equipe3.jpg",
      name: "Pierre Martin",
      role: "Associé Directeur Finance"
    }
  ];

  const experts = [
    {
      image: "/images/equipes/equipe4.jpg",
      name: "Thomas Bernard",
      role: "Lead Développeur"
    },
    {
      image: "/images/equipes/Eddy.jpg",
      name: "Sophie Moreau",
      role: "Expert Devops"
    },
    {
      image: "/images/equipes/equipe1.jpg",
      name: "Lucie Petit",
      role: "Lead multimédia"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <div className="text-center">
            <Title title="Notre équipes"></Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne de gauche - Fondateurs */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent mb-8">
              Nos Fondateurs
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {founders.map((founder, index) => (
                <div key={index} className="text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Nom avec dégradé */}
                  <p className="font-semibold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-1">
                    {founder.name}
                  </p>
                  
                  {/* Rôle */}
                  <p className="text-sm text-gray-700">
                    {founder.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne de droite - Experts IT */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent mb-8">
              Nos experts IT
            </h3>
            
            <div className="space-y-6">
              {experts.map((expert, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="text-left">
                    <p className="font-semibold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">
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
      </div>
    </section>
  );
}