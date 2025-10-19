"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Title from "@/components/common/Title"

export default function ReferencesPage(){
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const testimonials = [
        {
            id: 1,
            company: "BAR BLEU",
            logo: "/images/bleu.jpeg",
            person: "Mr BEHAVIA Bilsome Gérant",
            text: "Nous avons été impressionnés par la qualité et la réactivité de l'équipe d'INNOV-T. Leur expertise en développement de solutions numériques a été un acteur majeur pour notre entreprise."
        },
        {
            id: 2,
            company: "SJC Ambalavao",
            logo: "/images/sjc.jpeg",
            person: "Sœur Mariette Directrice",
            text: "La collaboration avec INNOV-T a été un véritable succès. Leur équipe a su comprendre nos besoins et nous a proposé des solutions adaptées à nos cultures."
        },
        {
            id: 3,
            company: "BAZARIKO",
            logo: "/images/bazariko.jpeg",
            person: "MR ANDY Gérant",
            text: "INNOV-T a été un partenaire de confiance pour notre projet de développement de solution B2B. Leur expertise et leur professionnalisme ont été déterminants pour le succès de notre projet."
        },
        {
            id: 4,
            company: "Yas Madagascar",
            logo: "/images/yas.jpeg",
            person: "Mr Benoit Janin CEO",
            text: "Travailler avec l'équipe d'INNOV-T a été une belle expérience. Leur écoute, leur rigueur et leurs idées innovantes ont su enrichir notre collaboration."
        },
        {
            id: 5,
            company: "EMIT",
            logo: "/images/emit.png",
            person: "Dr Hustine Robctonkrainy Directeur",
            text: "INNOV-T a offert à nos étudiants une vraie opportunité de s'engager sur le terrain à travers les stages et la formation. Cette collaboration a été très enrichissante."
        },
        {
            id: 6,
            company: "Madigicom",
            logo: "/images/madigicom.png",
            person: "MR Manda Sembédy CEO",
            text: "INNOV-T trouve des solutions et suit les projets avec sérieux. On sent une volonté de livrer dans les délais et avec qualité."
        },
        {
            id: 7,
            company: "Codecentric",
            logo: "/images/codecentric.png",
            person: "Mr Rainer Vehna CEO",
            text: "Cette collaboration avec INNOV-T nous permet d'apporter notre savoir-faire local à Madagascar et de contribuer ensemble à l'innovation numérique."
        },
        {
            id: 8,
            company: "Computer Store",
            logo: "/images/computer-store.png",
            person: "MR SAMSIR Gérant",
            text: "L'équipe d'INNOV-T est composée de professionnels éxperimentés et passionnés. Ils ont su nous proposer des solutions adaptées à nos besoins et nous ont accompagnés tout au long du projet."
        }
    ]

    return(
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* En-tête avec dégradé comme AboutSection */}
                <div className="bg-gradient-to-r from-blue-800 to-green-600 text-white p-12 rounded-b-xl rounded-t-none">
                    <h2 className="text-3xl font-bold">
                        Plus de <span className="text-yellow-400">50</span> entreprises nous font confiance
                    </h2>
                </div>
                
                {/* Contenu principal */}
                <div className="p-8 mt-12">
                    {/* Grille des témoignages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`bg-white rounded-2xl p-6 transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                                    isMounted 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: isMounted ? `${200 + index * 100}ms` : '0ms'
                                }}
                            >
                                {/* Logo de l'entreprise */}
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={testimonial.logo}
                                        alt={`Logo ${testimonial.company}`}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover"
                                    />
                                </div>

                                {/* Nom de l'entreprise en bleu */}
                                <h3 className="text-lg font-bold text-blue-800 mb-4 text-center">
                                    {testimonial.company}
                                </h3>

                                {/* Personne en gras */}
                                <p className="font-bold text-gray-800 mb-4 text-center text-sm">
                                    {testimonial.person}
                                </p>

                                {/* Témoignage */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-gray-700 leading-relaxed text-sm italic text-center">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}