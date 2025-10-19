"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`z-50 transition-all duration-300 ${
            isScrolled ? 'sticky top-2 mx-4' : ''
        }`}>
            <div className="max-w-7xl mx-auto">
                <div className={`flex justify-between items-center h-16 px-6 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-md shadow-lg border border-white/20 rounded-full'
                        : 'bg-white/20 backdrop-blur-md border-b border-white/30'
                }`}>
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
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Accueil
                            </Link>

                            <Link
                                href="/services"
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Services
                            </Link>

                            <Link
                                href="/expertises"
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Expertises
                            </Link>

                            <Link
                                href="/agences"
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Notre agence
                            </Link>

                            <Link
                                href="/blog"
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/references"
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Références
                            </Link>

                            <Link
                                href="/carriere"
                                className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-black'
                                        : 'text-gray-900 hover:text-black font-semibold'
                                }`}
                            >
                                Carrière
                            </Link>
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 cursor-pointer ${
                                isScrolled ? 'text-gray-700' : 'text-gray-900'
                            }`}
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
                    <div className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ${
                        isScrolled
                            ? 'bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl'
                            : 'bg-white/20 backdrop-blur-md border-b border-white/30'
                    }`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Accueil
                            </Link>

                            <Link
                                href="/services"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </Link>

                            <Link
                                href="/expertises"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Expertises
                            </Link>

                            <Link
                                href="/agences"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Notre agence
                            </Link>

                            <Link
                                href="/blog"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/references"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Références
                            </Link>

                            <Link
                                href="/carriere"
                                className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Carrière
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}