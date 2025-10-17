"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo à droite */}
          <div className="flex-shrink-0 ml-auto md:ml-0 md:mr-auto">
            <Link href="/" className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent monument">
                Innov-T
              </span>
            </Link>
          </div>

          {/* Menu desktop - au milieu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300"
              >
                Accueil
              </Link>

              <Link
                href="/services"
                className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300"
              >
                Services
              </Link>

              <Link
                href="/expertises"
                className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300"
              >
                Expertises
              </Link>

              {/* Dropdown Notre Agence */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300 flex items-center cursor-pointer"
                >
                  Notre agence
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link
                      href="/a-propos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      À propos
                    </Link>
                    <Link
                      href="/equipes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Équipes
                    </Link>
                    <Link
                      href="/pourquoi-nous"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Pourquoi Nous ?
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300"
              >
                Blog
              </Link>

              <Link
                href="/references"
                className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300"
              >
                Références
              </Link>

              <Link
                href="/carriere"
                className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition duration-300"
              >
                Carrière
              </Link>
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-black p-2 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              <Link
                href="/services"
                className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/expertises"
                className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Expertises
              </Link>

              <div
                className="px-3 py-2 text-gray-600 font-medium cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Notre agence
                <svg
                  className={`ml-1 h-4 w-4 inline transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/a-propos"
                    className="block px-3 py-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    À propos
                  </Link>
                  <Link
                    href="/equipes"
                    className="block px-3 py-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Équipes
                  </Link>
                  <Link
                    href="/pourquoi-nous"
                    className="block px-3 py-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Pourquoi Nous ?
                  </Link>
                </div>
              )}

              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/references"
                className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Références
              </Link>

              <Link
                href="/carriere"
                className="block px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Carrière
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Overlay pour fermer le dropdown en cliquant ailleurs */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
}
