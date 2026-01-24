import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { NAVIGATION, OVER_MIJ_PAGE, INSTRUCTOR_INFO, HOMEPAGE_CONTENT } from "~/data/siteData";
import FeatureBox from "~/components/FeatureBox";
import SectionHeader from "~/components/SectionHeader";
import LocationSection from "~/components/sections/LocationSection";
import SectionSeparator from "~/components/SectionSeparator";

export const meta: MetaFunction = () => {
    return [
        { title: `${NAVIGATION.links.overMij} - Typen met Kyana` },
        {
            name: "description",
            content: "Lees meer over Kyana en haar passie voor het aanleren van blind typen aan kinderen.",
        },
    ];
};

export default function OverMij() {
    return (
        <>
            {/* Opleiding & Ervaring Section */}
            <section className="section" style={{ paddingBottom: "var(--spacing-md)" }}>
                <div className="container">
                    <FeatureBox>
                        <div className="over-mij-grid" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            alignItems: "center",
                            gap: "var(--spacing-xl)",
                            width: "100%"
                        }}>
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                @media (min-width: 900px) {
                                    .over-mij-grid {
                                        grid-template-columns: 0.8fr 1.2fr !important;
                                    }
                                }
                            `}} />
                            {/* Image - Left Side */}
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <div style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    boxShadow: "var(--shadow-lg)",
                                    maxWidth: "320px",
                                    width: "100%"
                                }}>
                                    <img
                                        src={INSTRUCTOR_INFO.image}
                                        alt={INSTRUCTOR_INFO.name}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            display: "block",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Text - Right Side */}
                            <div style={{ textAlign: "left" }}>
                                <h2 style={{
                                    color: "var(--primary-color)",
                                    marginBottom: "var(--spacing-md)",
                                    fontSize: "2.25rem",
                                    fontWeight: "600"
                                }}>
                                    {OVER_MIJ_PAGE.education.title}
                                </h2>

                                {OVER_MIJ_PAGE.education.content.map((text, index) => (
                                    <p key={index} style={{
                                        fontSize: "1.1rem",
                                        lineHeight: "1.7",
                                        color: "var(--text-secondary)",
                                        marginBottom: index === OVER_MIJ_PAGE.education.content.length - 1 ? "var(--spacing-lg)" : "var(--spacing-md)"
                                    }} dangerouslySetInnerHTML={{ __html: text }} />
                                ))}

                                <Link
                                    to="/contact"
                                    className="btn btn-primary"
                                    style={{
                                        padding: "1rem 2.5rem",
                                        fontSize: "1.05rem",
                                        borderRadius: "14px",
                                        boxShadow: "0 10px 15px -3px rgba(255, 131, 85, 0.2)",
                                        display: "inline-block"
                                    }}
                                >
                                    {HOMEPAGE_CONTENT.hero.cta.contact}
                                </Link>
                            </div>
                        </div>
                    </FeatureBox>
                </div>
            </section>

            <SectionSeparator />

            {/* Location */}
            <LocationSection />
        </>
    );
}
