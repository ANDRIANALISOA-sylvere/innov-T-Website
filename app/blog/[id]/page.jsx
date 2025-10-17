"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Post() {
  const { id } = useParams();
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      image: "/images/team_building.jpeg",
      title: "Team Building à Ranomafana",
      description:
        "Une journée exceptionnelle passée à renforcer la cohésion et la collaboration au sein de notre équipe. Les rires, les défis et les moments partagés ont solidifié nos liens et renforcé notre esprit d’équipe.",
      date: "Mars 2025",
    },
    {
      id: 2,
      image: "/images/visite_eni.jpeg",
      title: "Annonce de partenariat avec ENI",
      description:
        "Nous avons annoncé un partenariat stratégique avec l'École Nationale d'Informatique pour promouvoir la formation en innovation et technologie. Ce projet vise à rapprocher le monde académique et professionnel.",
      date: "Avril 2025",
    },
  ];

  const post = useMemo(() => blogPosts.find((p) => p.id === Number(id)), [id]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          😕 Publication introuvable
        </h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto p-4 sm:p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Image principale */}
      <motion.div
        className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Détails du post */}
      <motion.div
        className="mt-6 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {post.title}
        </h1>
        <p className="text-gray-500 text-sm">{post.date}</p>
        <p className="text-gray-700 leading-relaxed">{post.description}</p>
      </motion.div>

      {/* Actions style Instagram */}
      <motion.div
        className="mt-6 flex items-center justify-between border-t pt-4 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-gray-800 transition"
        >
          Retour
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
