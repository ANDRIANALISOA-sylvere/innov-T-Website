"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`z-50 transition-all duration-1000 ease-out ${
                isScrolled ? 'sticky top-2 mx-4' : ''
            } ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`flex justify-between items-center h-16 px-6 transition-all duration-700 ${
                        isScrolled
                            ? 'bg-white/90 backdrop-blur-md shadow-lg border border-white/20 rounded-full'
                            : 'bg-white/20 backdrop-blur-md border-b border-white/30'
                    }`}
                >
                    {/* Logo à droite */}
                    <div
                        className={`flex-shrink-0 ml-auto md:ml-0 md:mr-auto transition-all duration-700 delay-300 ${
                            isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                        }`}
                    >
                        <Link href="/" className="text-3xl font-bold">
                            <span className="bg-gradient-to-r from-blue-800 via-green-600 to-green-500 bg-clip-text text-transparent monument">
                                Innov-T
                            </span>
                        </Link>
                    </div>

                    {/* Menu desktop - au milieu */}
                    <div
                        className={`hidden md:flex items-center justify-center flex-1 transition-all duration-700 delay-500 ${
                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                    >
                        <div className="flex space-x-8">
                            {[
                                { href: "/", label: "Accueil" },
                                { href: "/services", label: "Services" },
                                { href: "/expertises", label: "Expertises" },
                                { href: "/agences", label: "Notre agence" },
                                { href: "/blog", label: "Blog" },
                                { href: "/references", label: "Références" },
                                { href: "/carriere", label: "Carrière" },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                                        isScrolled
                                            ? 'text-gray-700 hover:text-black'
                                            : 'text-gray-900 hover:text-black font-semibold'
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div
                        className={`md:hidden flex items-center transition-all duration-700 delay-700 ${
                            isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                        }`}
                    >
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
                    <div
                        className={`md:hidden mt-2 overflow-hidden transition-all duration-700 ease-out ${
                            isScrolled
                                ? 'bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl'
                                : 'bg-white/20 backdrop-blur-md border-b border-white/30'
                        } ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {[
                                { href: "/", label: "Accueil" },
                                { href: "/services", label: "Services" },
                                { href: "/expertises", label: "Expertises" },
                                { href: "/agences", label: "Notre agence" },
                                { href: "/blog", label: "Blog" },
                                { href: "/references", label: "Références" },
                                { href: "/carriere", label: "Carrière" },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="block px-3 py-2 text-gray-900 font-semibold hover:text-black hover:bg-white/20 rounded-md transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
