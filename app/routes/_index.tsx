import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

import InstructorSection from "~/components/sections/InstructorSection";
import LocationSection from "~/components/sections/LocationSection";
import Typ10Section from "~/components/sections/Typ10Section";
import AboutSection from "~/components/sections/AboutSection";
import { HOMEPAGE_CONTENT } from "~/data/siteData";
import SectionSeparator from "~/components/SectionSeparator";

export const meta: MetaFunction = () => {
  return [
    { title: HOMEPAGE_CONTENT.seo.title },
    {
      name: "description",
      content: HOMEPAGE_CONTENT.seo.description,
    },
  ];
};

export default function Index() {
  return (
    <>
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
      <section className="section" style={{ padding: "var(--spacing-xl) 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{
                minWidth: "280px",
                padding: "1.25rem 2rem",
                fontSize: "1.2rem",
                borderRadius: "16px",
                boxShadow: "0 10px 15px -3px rgba(255, 131, 85, 0.2)"
              }}
            >
              {HOMEPAGE_CONTENT.hero.cta.contact}
            </Link>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Location Information */}
      <LocationSection />

    </>
  );
}
