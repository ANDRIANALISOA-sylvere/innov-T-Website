"use client"; 

import { useState, useEffect } from "react";
import Title from "@/components/common/Title";
import ServiceCard from "@/components/services/ServiceCard";
import { Search } from "lucide-react";

export default function ServicesPage() {

  const servicesData = [
    {
      icon: "🌐",
      title: "Développement de site internet et E-commerce",
      description:
        "Création de sites web modernes, performants et sécurisés, adaptés à vos besoins professionnels.",
    },
    {
      icon: "📱",
      title: "Applications mobiles Android et iOS",
      description:
        "Développement d'applications mobiles natives et hybrides pour améliorer votre visibilité mobile.",
    },
    {
      icon: "☁️",
      title: "Solutions cloud et hébergement",
      description:
        "Mise en place et gestion d'infrastructures cloud sécurisées et performantes.",
    },
    {
      icon: "🎨",
      title: "Design UI/UX et identité visuelle",
      description:
        "Création d'interfaces modernes et d'expériences utilisateur fluides et esthétiques.",
    },
    {
      icon: "🔒",
      title: "Cybersécurité et audit technique",
      description:
        "Protection de vos données, audit de sécurité et détection de vulnérabilités.",
    },
  ];

  const [result, setResult] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredServices = servicesData.filter(
    (service) =>
      service.title.toLowerCase().includes(result.toLowerCase()) ||
      service.description.toLowerCase().includes(result.toLowerCase())
  );

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Titre avec animation */}
        <div className={`text-center mb-8 transform transition-all duration-700 ${
          isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Title title="Découvrez nos services" />
        </div>

        {/* Sous-titre avec animation décalée */}
        <p className={`text-gray-800 text-center mb-8 text-lg transform transition-all duration-700 delay-200 ${
          isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Découvrez le service numérique qui correspond à vos besoins
        </p>

        {/* Barre de recherche avec animation */}
        <div className={`relative max-w-2xl mx-auto mb-8 transform transition-all duration-700 delay-300 ${
          isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un service..."
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-base"
          />
        </div>

        {/* Grille avec animations échelonnées */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isMounted 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: isMounted ? `${400 + index * 100}ms` : '0ms'
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))
          ) : (
            <div className={`col-span-full text-center py-12 transform transition-all duration-700 delay-500 ${
              isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-gray-500 text-lg">
                Aucun service trouvé pour "{result}"
              </p>
              <p className="text-gray-400 mt-2">
                Essayez d'autres termes de recherche
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}