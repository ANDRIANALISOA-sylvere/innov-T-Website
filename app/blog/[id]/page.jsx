"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

export default function Post() {
  const { id } = useParams();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "/images/team_building.jpeg",
      title: "Team Building à Ranomafana",
      description:
        "Une journée exceptionnelle passée à renforcer la cohésion et la collaboration au sein de notre équipe. Les rires, les défis et les moments partagés ont solidifié nos liens et renforcé notre esprit d'équipe. Cette expérience unique nous a permis de découvrir les magnifiques paysages de Ranomafana tout en développant une synergie encore plus forte entre les membres de notre équipe.",
      date: "Mars 2025",
      location: "Ranomafana, Madagascar",
      tags: ["Team Building", "Cohesion", "Nature"]
    },
    {
      id: 2,
      image: "/images/visite_eni.jpeg",
      title: "Annonce de partenariat avec ENI",
      description:
        "Nous avons annoncé un partenariat stratégique avec l'École Nationale d'Informatique pour promouvoir la formation en innovation et technologie. Ce projet vise à rapprocher le monde académique et professionnel, offrant ainsi aux étudiants des opportunités concrètes dans le domaine du développement web et mobile.",
      date: "Avril 2025",
      location: "Fianarantsoa, Madagascar",
      tags: ["Partenariat", "Education", "Innovation"]
    },
  ];

  const post = useMemo(() => blogPosts.find((p) => p.id === Number(id)), [id]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          😕 Publication introuvable
        </h1>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Retour aux articles
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Bouton retour avec animation */}
        <button
          onClick={() => router.back()}
          className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-all duration-500 ${
            isMounted ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Retour aux articles</span>
        </button>

        {/* Carte principale avec animation */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ${
          isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}>
          {/* Image principale avec animation */}
          <div className={`relative w-full h-[300px] sm:h-[400px] lg:h-[450px] transition-all duration-1000 ${
            isMounted ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          {/* Contenu avec animations échelonnées */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* En-tête avec animation */}
            <div className={`space-y-3 transition-all duration-700 delay-200 ${
              isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                {post.location && (
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{post.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags avec animation */}
            {post.tags && (
              <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-300 ${
                isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Description avec animation */}
            <div className={`prose prose-lg max-w-none transition-all duration-700 delay-400 ${
              isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {post.description}
              </p>
            </div>

            {/* Actions avec animation */}
            <div className={`flex items-center justify-between pt-6 border-t border-gray-100 transition-all duration-700 delay-500 ${
              isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <button
                onClick={() => router.back()}
                className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-all duration-300  font-semibold"
              >
                revoir tous les articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}