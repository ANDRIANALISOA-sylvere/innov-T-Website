"use client";
import Title from "@/components/common/Title";
import ServiceCard from "@/components/common/ServiceCard";
import { CodeXml, Apple, Cloud } from "lucide-react";
import Link from "next/link";

export function ServicesPreview() {
    const services = [
        {
            icon: <CodeXml className="h-12 w-12" />,
            title: "Développement de site internet et E-commerce",
            description:
                "Création de sites web modernes, performants et sécurisés, adaptés à vos besoins professionnels.",
        },
        {
            icon: <Apple className="h-12 w-12" />,
            title: "Applications mobiles Android et iOS",
            description:
                "Développement d'applications mobiles natives et hybrides pour améliorer votre visibilité mobile.",
        },
        {
            icon: <Cloud className="h-12 w-12" />,
            title: "Solutions cloud et hébergement",
            description:
                "Mise en place et gestion d'infrastructures cloud sécurisées et performantes.",
        },
    ];

    return (
        <div className="py-12 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                {/* Titre */}
                <Title title="Nos services" />

                {/* Phrase en gras */}
                <p className="text-gray-800 text-lg font-bold mb-8">
                    Découvrez le service numérique qui correspond à vos besoins
                </p>

                {/* Grille des services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                {/* Bouton En savoir plus */}
                <Link
                    href="/services"
                    className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
                >
                    En savoir plus sur nos services
                </Link>
            </div>
        </div>
    );
}
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== HERO ===== */}
      <div
        className="relative flex flex-col min-h-screen pt-32 text-center text-white px-6"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/bg-hero-section.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-xl md:text-5xl monument leading-tight">
          Propulsez Votre Entreprise vers
          <br />
          L’<span className="text-green-400">Innovation</span> Technologique
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-8 cursor-pointer py-3 bg-blue-900 hover:bg-blue-700 text-white rounded-full font-semibold transition">
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
        <ServicesPreview></ServicesPreview>
    </section>
  );
}
