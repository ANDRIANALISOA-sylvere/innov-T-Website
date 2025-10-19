"use client";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="relative text-white px-6 pt-12 pb-4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,58,134,0.9) 0%, rgba(8,58,134,0.85) 10%, rgba(78,180,30,0.85) 100%), url('/images/bg-hero-section.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Trois colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Première colonne - INNOV-T Madagascar */}
          <div>
            <h3 className="text-2xl font-bold mb-4">INNOV-T Madagascar</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Votre partenaire de confiance pour l'innovation technologique 
              et le développement de solutions digitales sur mesure.
            </p>
            
            {/* Localisation */}
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 text-white mr-3" />
              <span className="text-gray-200">Fianarantsoa Madagascar</span>
            </div>
            
            {/* Email */}
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-white mr-3" />
              <span className="text-gray-200">contactinnovt@gmail.com</span>
            </div>
          </div>

          {/* Deuxième colonne - LIENS */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LIENS</h3>
            <div className="space-y-3">
              <a href="/" className="block text-gray-200 hover:text-green-400 transition">Accueil</a>
              <a href="/services" className="block text-gray-200 hover:text-green-400 transition">Services</a>
              <a href="/expertises" className="block text-gray-200 hover:text-green-400 transition">Expertises</a>
              <a href="/agences" className="block text-gray-200 hover:text-green-400 transition">Notre agence</a>
              <a href="/blog" className="block text-gray-200 hover:text-green-400 transition">Blog</a>
              <a href="/references" className="block text-gray-200 hover:text-green-400 transition">Références</a>
              <a href="/carriere" className="block text-gray-200 hover:text-green-400 transition">Carrière</a>
            </div>
          </div>

          {/* Troisième colonne - TECHNOLOGIES */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-3">
              {/* React */}
              <div className="flex items-center justify-center">
                <img 
                  src="/images/techs/react.png" 
                  alt="React" 
                  className="h-6 w-6 filter brightness-0 invert" 
                />
              </div>
              {/* Java */}
              <div className="flex items-center justify-center">
                <img 
                  src="/images/techs/java.png" 
                  alt="Java" 
                  className="h-6 w-6 filter brightness-0 invert" 
                />
              </div>
              {/* Python */}
              <div className="flex items-center justify-center">
                <img 
                  src="/images/techs/python.png" 
                  alt="Python" 
                  className="h-6 w-6 filter brightness-0 invert" 
                />
              </div>
              {/* Node */}
              <div className="flex items-center justify-center">
                <img 
                  src="/images/techs/node.png" 
                  alt="Node.js" 
                  className="h-6 w-6 filter brightness-0 invert" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ligne horizontale */}
        <div className="border-t border-gray-400 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} INNOV-T Madagascar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}