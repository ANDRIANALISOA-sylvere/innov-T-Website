import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import Favicon from "@/app/favicon";

export const metadata = {
    title: "INNOV-T Madagascar - Développement Web & Solutions Digitales",
    description: "INNOV-T Madagascar, votre partenaire en développement web, applications mobiles, solutions cloud et cybersécurité. Transformation digitale pour entreprises à Madagascar.",
    keywords: "développement web Madagascar, applications mobiles, solutions cloud, cybersécurité, site internet, e-commerce, digitalisation, innovation technologique",
    authors: [{ name: "INNOV-T Madagascar" }],
    creator: "INNOV-T Madagascar",
    publisher: "INNOV-T Madagascar",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://innov-t-website.vercel.app/'),
    alternates: {
        canonical: '/',
        languages: {
            'fr-MG': '/',
        },
    },
    openGraph: {
        title: "INNOV-T Madagascar - Innovation Technologique",
        description: "Propulsez votre entreprise vers l'innovation technologique avec INNOV-T Madagascar",
        url: "https://innov-t-website.vercel.app/",
        siteName: 'INNOV-T Madagascar',
        images: [
            {
                url: '/images/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'INNOV-T Madagascar - Innovation Technologique',
            },
        ],
        locale: 'fr_MG',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <head>
            <Favicon />
            {/* Structured Data for Local Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "INNOV-T Madagascar",
                        "alternateName": "INNOV-T",
                        "url": "https://innov-t-website.vercel.app/",
                        "logo": "https://innov-t-website.vercel.app/images/logo.jpg",
                        "description": "Votre partenaire de confiance pour l'innovation technologique et le développement de solutions digitales sur mesure à Madagascar",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Fianarantsoa",
                            "addressCountry": "MG"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "contactinnovt@gmail.com",
                            "contactType": "customer service"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/innov-t-madagascar/",
                            "https://www.facebook.com/profile.php?id=100089680669486",
                        ]
                    })
                }}
            />
            {/* Additional Structured Data for Service Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "provider": {
                            "@type": "Organization",
                            "name": "INNOV-T Madagascar"
                        },
                        "serviceType": "Développement Web et Solutions Digitales",
                        "areaServed": "Madagascar",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Services INNOV-T",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Développement de site internet et E-commerce"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Applications mobiles Android et iOS"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Solutions cloud et hébergement"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
        </head>
        <body>
        <NavBar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}