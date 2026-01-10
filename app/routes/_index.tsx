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
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container text-center">
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-md)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/boeken" className="btn btn-primary">
              {HOMEPAGE_CONTENT.hero.cta.bookSession}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
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
