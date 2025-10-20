"use client";
import { useState, useEffect } from "react";
import Title from "@/components/common/Title";
import ServiceCard from "@/components/common/ServiceCard";
import { CodeXml, Apple, Cloud } from "lucide-react";
import Link from "next/link";
import useInView from "@/hooks/useInView";

export function ServicesPreview() {
  const { ref, isInView } = useInView(0.3);

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
    <div ref={ref} className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Title title="Nos services" />
        </div>

        <p
          className={`text-gray-800 text-lg font-bold mb-8 transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Découvrez le service numérique qui correspond à vos besoins
        </p>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-[${300 + index * 100}ms] ${
                isInView
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        {/* Bouton */}
        <Link
          href="/services"
          className={`inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-700 delay-[700ms] ${
            isInView
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          } hover:scale-105`}
        >
          En savoir plus sur nos services
        </Link>
      </div>
    </div>
  );
}
export default function HeroSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* ===== HERO ===== */}
      <div
        className={`relative flex flex-col min-h-screen pt-32 text-center text-white px-6 transition-all duration-1000 ${
          isInView ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/bg-hero-section.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <h1
          className={`text-xl md:text-5xl monument leading-tight transition-all duration-700 delay-300 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Propulsez Votre Entreprise vers
          <br />
          <span
            className={`text-green-400 inline-block transition-all duration-700 delay-500 ${
              isInView
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-95"
            }`}
          >
            L'Innovation
          </span>{" "}
          Technologique
        </h1>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-600 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button className="px-8 cursor-pointer py-3 bg-blue-900 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Découvrir nos projets
          </button>
          <button className="px-8 cursor-pointer py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Je veux une équipe
          </button>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="flex justify-center relative z-20">
        <div
          className={`w-3/4 bg-white rounded-2xl shadow-xl -mt-20 py-10 px-6 text-center transition-all duration-700 delay-800 ${
            isInView
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div
            className={`transition-all duration-700 delay-900 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Title title="Innov-T en chiffre" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-200">
            {[
              { number: "+80", label: "Projets réalisés" },
              { number: "+30", label: "Collaborateurs" },
              { number: "+20", label: "Clients" },
              { number: "+10", label: "Partenaires" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`px-4 transition-all duration-700 delay-[${1000 + index * 100}ms] ${
                  isInView
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                }`}
              >
                <p className="text-4xl font-extrabold text-green-600">
                  {stat.number}
                </p>
                <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION BLANCHE ===== */}
      <ServicesPreview />
    </section>
  );
}