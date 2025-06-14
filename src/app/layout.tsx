// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Assuming global styles are imported here

// Define site-wide metadata for SEO, leveraging Next.js 13+ App Router's metadata API.
// This centralizes control over critical SEO signals for consistency across the entire website.
export const metadata: Metadata = {
  // Sets the base URL for all absolute URLs in metadata, crucial for canonicalization and social sharing.
  metadataBase: new URL('https://www.axalys.fr'),

  // Default meta title for the website. This will be used if individual pages don't specify their own title.
  // It incorporates Axalya's brand name, core keywords, and key value proposition to attract French SMEs. [1]
  title: {
    default: 'Axalya | Automatisation IA pour PME Françaises: Gagnez du Temps & Réduisez les Coûts',
    // Template for dynamic titles on individual pages (e.g., "Page Title | Axalya: Automatisation IA pour PME Françaises").
    template: '%s | Axalya: Automatisation IA pour PME Françaises',
  },

  // Default meta description for the website. This provides a compelling summary for SERPs,
  // highlighting "pragmatic AI" and tangible benefits (cost reduction, time-saving, growth) directly addressing SME pain points. [1]
  description: 'Axalya aide les PME françaises à optimiser leurs opérations avec des solutions d\'IA pragmatiques. Réduisez vos coûts, gagnez du temps et accélérez votre croissance.',

  // Open Graph tags for enhanced social media presence, particularly important for LinkedIn.[1]
  openGraph: {
    title: 'Axalya | Automatisation IA pour PME Françaises',
    description: 'Axalya aide les PME françaises à optimiser leurs opérations avec des solutions d\'IA pragmatiques pour gagner du temps et réduire les coûts.',
    url: 'https://www.axalys.fr/',
    siteName: 'Axalya',
    images:["https://www.axalya.fr/logo.png"],
    locale: 'fr_FR', // Explicitly declares the locale for Open Graph.
    type: 'website', // Defines the type of content.
  },

  // Twitter Card tags for optimized display when content is shared on Twitter.
  twitter: {
    card: 'summary_large_image', // Preferred for visual impact.
    site: '@Axalya_FR', // Replace with Axalya's actual Twitter handle if applicable.
    creator: '@Axalya_FR', // Replace with Axalya's actual Twitter handle if applicable.
    title: 'Axalya | Automatisation IA pour PME Françaises',
    description: 'Axalya aide les PME françaises à optimiser leurs opérations avec des solutions d\'IA pragmatiques pour gagner du temps et réduire les coûts.',
    images: ['https://www.axalya.fr/_next/image?url=%2Flogo.png&w=1920&q=75'], // Consistent with Open Graph image.
  },

  // Robots meta tag to control how search engine crawlers interact with the website.
  // Defaulting to index, follow for public pages.
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
  },


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Sets the primary language of the website to French, crucial for targeting the French market. [1]
    <html lang="fr">
      <head>
        {/* The viewport meta tag is automatically handled by Next.js's metadata API if not explicitly set. */}
        {/* Global CSS imports (e.g., './globals.css') are typically handled at the top of the file. */}
        {/* Performance considerations: Ensure global styles and scripts are optimized (minified, deferred, async)
            to improve Core Web Vitals. This file is the ideal place to manage global asset loading strategies. */}
      </head>
      <body>
        {children}

        {/* JSON-LD Structured Data for Axalya, enhancing search engine understanding and potential for rich results. */}
        {/* Organization Schema: Establishes Axalya as a recognized business entity, building trust and authority. [1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Axalya",
              "url": "https://www.axalya.fr/",
              "logo": "https://www.axalya.fr/logo.png", // Path to Axalya's official logo.
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-0983888310", // Replace with Axalya's actual phone number.
                "contactType": "customer service"
              },
              "sameAs":
                "https://www.linkedin.com/company/axalya-solutions/" // Example LinkedIn URL.
                // Add other social profiles as needed.
            })
          }}
        />

        {/* WebSite Schema: Defines the website itself and enables sitelinks search box functionality. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Axalya",
              "url": "https://www.axalya.fr/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.axalya.fr/", // Replace with actual search page URL.
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* General Service Schema: Provides a high-level overview of Axalya's core service offerings.
            This reinforces the "productized services" approach and highlights the target market and benefits. [1] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Solutions d'Automatisation IA pour PME",
              "description": "Axalya propose des solutions d'IA et d'automatisation pragmatiques pour aider les PME françaises à regagner du temps, réduire les coûts et optimiser leurs opérations.",
              "provider": {
                "@type": "Organization",
                "name": "Axalya"
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "serviceType": "Conseil en Automatisation IA",
              "url": "https://www.axalya.fr/#services" // Assuming a general services overview page.
            })
          }}
        />
      </body>
    </html>
  );
}