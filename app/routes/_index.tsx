import type { MetaFunction } from "@remix-run/cloudflare";
import Button from "~/components/Button";

import InstructorSection from "~/components/sections/InstructorSection";
import LocationSection from "~/components/sections/LocationSection";
import Typ10Section from "~/components/sections/Typ10Section";
import AboutSection from "~/components/sections/AboutSection";
import { HOMEPAGE_CONTENT, INSTRUCTOR_INFO, LOCATION_INFO } from "~/data/siteData";
import SectionSeparator from "~/components/SectionSeparator";

export const meta: MetaFunction = () => {
  return [
    { title: HOMEPAGE_CONTENT.seo.title },
    {
      name: "description",
      content: HOMEPAGE_CONTENT.seo.description,
    },
    {
      name: "keywords",
      content: HOMEPAGE_CONTENT.seo.keywords,
    },
    { property: "og:title", content: HOMEPAGE_CONTENT.seo.title },
    { property: "og:description", content: HOMEPAGE_CONTENT.seo.description },
    { property: "og:image", content: "https://kyanadebosschere.be/foto-1.png" },
    { property: "og:url", content: "https://kyanadebosschere.be/" },
    { tagName: "link", rel: "canonical", href: "https://kyanadebosschere.be/" },
  ];
};

export default function Index() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Typen met Kyana",
    "image": "https://kyanadebosschere.be" + INSTRUCTOR_INFO.image,
    "description": HOMEPAGE_CONTENT.seo.description,
    "url": "https://kyanadebosschere.be",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": LOCATION_INFO.inPerson.address.street,
      "addressLocality": "Ingelmunster",
      "postalCode": "8770",
      "addressCountry": "BE"
    },
    // Coordinates for Praktijk Boost Ingelmunster
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.898316,
      "longitude": 3.263629
    },
    "areaServed": [
      "Ingelmunster",
      "Kuurne",
      "Harelbeke",
      "Lendelede",
      "Izegem",
      "Meulebeke",
      "Oostrozebeke",
      "Ardooie"
    ],
    "founder": {
      "@type": "Person",
      "name": INSTRUCTOR_INFO.name
    },
    "offers": {
      "@type": "Offer",
      "category": "Typelessen",
      "price": "275",
      "priceCurrency": "EUR",
      "description": "Reeks van 10 lessen Typ10"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Instructor Introduction */}
      <InstructorSection />

      <SectionSeparator />

      {/* Typ10 Methodology Section (Aanbod) */}
      <Typ10Section />

      <SectionSeparator />

      {/* About Instructor Section */}
      <AboutSection />

      <SectionSeparator />

      {/* Call to Action Buttons */}
      <section className="section" style={{ padding: "var(--spacing-md) 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--spacing-md)"
            }}
          >
            <Button
              to="/aanbod"
              variant="secondary"
              size="lg"
              className="shadow-premium"
            >
              {HOMEPAGE_CONTENT.hero.cta.aanbod}
            </Button>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="shadow-premium"
            >
              {HOMEPAGE_CONTENT.hero.cta.contact}
            </Button>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Location Information */}
      <LocationSection />

    </>
  );
}
