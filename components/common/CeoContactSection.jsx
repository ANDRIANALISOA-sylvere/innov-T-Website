// components/CeoContactSection.tsx
'use client';

export default function CeoContactSection() {
  return (
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
      {/* Colonne de gauche - Citation du CEO */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Citation du CEO */}
        <blockquote className="text-lg italic text-gray-900 mb-8 leading-relaxed">
          "Notre mission est de transformer vos idées les plus ambitieuses en solutions digitales performantes. Chaque projet est une opportunité d'innovation et d'excellence."
        </blockquote>
        
        {/* Avatar, Nom et Titre centrés */}
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
            <img 
              src="/images/ceo.jpg" 
              alt="Marius Randrianarison - CEO & Fondateur"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Nom */}
          <p className="font-semibold text-gray-800 text-lg mb-1">
            Marius Randrianarison
          </p>
          
          {/* Titre avec dégradé */}
          <p className="bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent font-medium">
            CEO & Fondateur
          </p>
        </div>
      </div>

      {/* Colonne de droite - Formulaire de contact */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Titre avec dégradé */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent mb-6">
          Partagez vos idées avec nous
        </h3>
        
        {/* Formulaire */}
        <form className="space-y-4">
          {/* Input Nom complet */}
          <div>
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          
          {/* Input Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          
          {/* Textarea Message */}
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>
          
          {/* Bouton Envoyer */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}