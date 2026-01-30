import type { MetaFunction } from "@remix-run/cloudflare";

import SectionHeader from "~/components/SectionHeader";
import LocationSection from "~/components/sections/LocationSection";
import { CONTACT_PAGE, CONTACT_INFO } from "~/data/siteData";

export const meta: MetaFunction = () => {
    return [
        { title: CONTACT_PAGE.seo.title },
        {
            name: "description",
            content: CONTACT_PAGE.seo.description,
        },
        {
            name: "keywords",
            content: CONTACT_PAGE.seo.keywords,
        },
        { property: "og:title", content: CONTACT_PAGE.seo.title },
        { property: "og:description", content: CONTACT_PAGE.seo.description },
        { property: "og:image", content: "https://kyanadebosschere.be/foto-1.png" },
        { property: "og:url", content: "https://kyanadebosschere.be/contact" },
        { tagName: "link", rel: "canonical", href: "https://kyanadebosschere.be/contact" },
    ];
};

export default function Contact() {

    return (
        <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <section className="section" style={{ paddingBottom: "var(--spacing-xl)" }}>
                <div className="container">
                    <div className="contact-header-box" style={{ marginBottom: 0 }}>
                        <SectionHeader
                            title={<span style={{ color: "var(--primary-color)" }}>{CONTACT_PAGE.header.title}</span>}
                            subtitle={CONTACT_PAGE.header.subtitle}
                        />
                        <p style={{
                            textAlign: "center",
                            marginTop: "calc(var(--spacing-xl) * -0.5)",
                            fontSize: "1.2rem",
                            fontWeight: "500"
                        }}>
                            <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: "var(--primary-color)" }}>{CONTACT_INFO.email}</a>
                        </p>
                    </div>


                </div>
            </section>

            <LocationSection />
        </div>
    );
}
