'use client';

import Image from 'next/image';
import Title from '@/components/common/Title';

export default function Partner() {
  return (
    <section className="py-20 bg-white text-center">
      {/* ===== Titre ===== */}
      <Title title="Nos partenaires" />

      {/* ===== Description ===== */}
      <p className="text-gray-600 mt-2 mb-10">
        Découvrez nos partenaires qui nous accompagnent vers la réussite.
      </p>

      {/* ===== Logos des partenaires ===== */}
      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        <Image
          src="/images/codecentric.jpg"
          alt="Partenaire 1"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/computer-store.jpg"
          alt="Partenaire 2"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/emit.jpg"
          alt="Partenaire 3"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/madigicom.jpg"
          alt="Partenaire 4"
          width={140}
          height={60}
          className="object-contain"
        />
      </div>
    </section>
  );
}
