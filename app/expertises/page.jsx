"use client"

import { useState, useEffect } from "react"
import Title from "@/components/common/Title"
import ExpertisesCard from "@/components/expertises/ExpertisesCard"
import Image from 'next/image'
import Link from "next/link"

export default function ExpertisesPage() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const expertisesData = [
        {
            title: "Développement sur mesure",
            stat: "+85",
            statLabel: "clients satisfaits",
        },
        {
            title: "Applications mobiles",
            stat: "+120",
            statLabel: "apps déployées",
        },
        {
            title: "Projets cloud",
            stat: "+50",
            statLabel: "infrastructures",
        },
        {
            title: "Design UI/UX",
            stat: "+200",
            statLabel: "interfaces créées",
        },
        {
            title: "Audits sécurité",
            stat: "+75",
            statLabel: "systèmes sécurisés",
        },
        {
            title: "E-commerce",
            stat: "+45",
            statLabel: "boutiques en ligne",
        }
    ]

    return (
        <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-7xl">
                {/* Titre avec animation */}
                <div className={`text-center mb-8 transform transition-all duration-700 ${
                    isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <Title title="Découvrez nos expertises" />
                </div>

                {/* Grille des expertises avec animations échelonnées */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
                    {expertisesData.map((expertise, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-700 ${
                                isMounted 
                                    ? 'translate-y-0 opacity-100 scale-100' 
                                    : 'translate-y-8 opacity-0 scale-95'
                            }`}
                            style={{
                                transitionDelay: isMounted ? `${200 + index * 100}ms` : '0ms'
                            }}
                        >
                            <ExpertisesCard 
                                title={expertise.title}
                                stat={expertise.stat}
                                statLabel={expertise.statLabel}
                            />
                        </div>
                    ))}
                </div>

                {/* Section Madagascar avec layout responsive */}
                <div className={`flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg transform transition-all duration-700 delay-500 ${
                    isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    {/* Image avec animations */}
                    <div className={`flex-shrink-0 transform transition-all duration-700 delay-600 ${
                        isMounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}>
                        <Image
                            id="extreminalize"
                            src={'/images/extreminalize.jpeg'}
                            width={400}
                            height={400}
                            alt="externalisation Madagascar"
                            className="border-t-8 border-b-8 border-t-blue-900 border-b-green-500 object-cover w-full max-w-sm lg:max-w-md"
                        />
                    </div>

                    {/* Contenu texte avec animations */}
                    <div className={`flex-1 space-y-6 transform transition-all duration-700 delay-700 ${
                        isMounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent">
                            Pourquoi externaliser à Madagascar ?
                        </h2>
                        
                        <div className="space-y-4 text-gray-800 text-base">
                            <p>
                                <strong>Externaliser à Madagascar</strong>, c'est faire le choix d'une main-d'œuvre qualifiée, 
                                d'une grande réactivité et d'une réduction significative des coûts.
                            </p>
                            <p>
                                Nos talents locaux, formés aux dernières technologies, vous garantissent un développement 
                                de qualité, rapide et sur mesure.
                            </p>
                            <p>
                                En collaborant avec Madagascar, vous bénéficiez d'un <strong>fuseau horaire avantageux</strong>, 
                                d'une culture orientée vers la performance et d'une communication fluide en français et anglais.
                            </p>
                        </div>


                        {/* Bouton avec animation */}
                        <div className={`transform transition-all duration-700 delay-1000 ${
                            isMounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}>
                            <button className="px-8 py-3 cursor-pointer bg-green-600  hover:bg-green-700  text-white rounded-full transition-all duration-300">
                                <Link href={'/equipes'} className="font-semibold">
                                    Je cherche une équipe
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}