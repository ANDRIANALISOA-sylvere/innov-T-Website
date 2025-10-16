'use client';

import Image from 'next/image';
import Title from '@/components/common/Title';

export default function Partner() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* ===== Titre ===== */}
      <Title title="Nos partenaires" />

      {/* ===== Description ===== */}
      <p className="text-gray-600 mt-2 mb-12">
        Découvrez nos partenaires qui nous accompagnent vers la réussite.
      </p>

      {/* ===== Logos des partenaires ===== */}
      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        <Image
          src="/images/codecentric.png"
          alt="Partenaire 1"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/computer-store.png"
          alt="Partenaire 2"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/emit.png"
          alt="Partenaire 3"
          width={140}
          height={60}
          className="object-contain"
        />
        <Image
          src="/images/madigicom.png"
          alt="Partenaire 4"
          width={140}
          height={60}
          className="object-contain"
        />
      </div>
    </section>
  );
}
