"use client"

import { useState, useEffect } from "react";
import BlogCard from "@/components/blog/BlogCard";
import Image from "next/image";

export default function BlogPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Données statiques des articles
    const blogPosts = [
        {
            id: 1,
            image: "/images/team_building.jpeg",
            title: "Team Building à Ranomafana",
            description: "Une journée exceptionnelle passée à renforcer la cohésion et la collaboration au sein de notre équipe.",
            date: "Mars 2025"
        },
        {
            id: 2,
            image: "/images/visite_eni.jpeg",
            title: "Annonce de partenariat avec ENI",
            description: "Nous avons participé à une conférence dédiée à l’innovation et au développement durable.",
            date: "Avril 2025"
        },
    ];

    return (
        <div className="py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-7xl">
                {/* Header */}
                <div className={`text-center mb-8 transform transition-all duration-700 ${
                    isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-500 bg-clip-text text-transparent px-4">
                        On vous informe les dernières nouvelles
                    </h2>
                    <p className="mt-2 text-sm sm:text-base px-4">
                        Nos activités et événements auxquels nous participons vous seront transmises ici.
                    </p>
                </div>

                {/* Bannière principale */}
                <div className={`rounded-xl text-lg shadow-xl hover:scale-101 flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white transform transition-all duration-300 delay-200 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]
                hover:shadow-2xl ${
                    isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                }`}
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/team_building.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold">team building 2025</h1>
                    <p className="text-sm sm:text-base lg:text-lg mt-2">
                        Notre équipe a conçu un blog dédié au team building pour vous aider à créer un environnement de travail collaboratif et innovant.
                    </p>
                </div>

                {/* Titre "Les plus récents" */}
                <div className={`mt-8 sm:mt-10 text-center transform transition-all duration-700 delay-300 ${
                    isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Les plus récents</h1>
                </div>

                {/* Grille des cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full px-2 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-10">
                    {blogPosts.map((post, index) => (
                        <div key={post.id}
                            className={`transform transition-all duration-700 delay-${400 + index * 100} ${
                                isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                            }`}
                        >
                            <BlogCard
                                id={post.id}
                                image={post.image}
                                title={post.title}
                                date={post.date}
                                
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
