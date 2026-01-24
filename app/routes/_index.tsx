import type { MetaFunction } from "@remix-run/cloudflare";
import Button from "~/components/Button";

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
