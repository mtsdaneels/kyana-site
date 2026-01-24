import type { MetaFunction } from "@remix-run/cloudflare";
import Typ10Section from "~/components/sections/Typ10Section";
import LocationSection from "~/components/sections/LocationSection";
import SectionSeparator from "~/components/SectionSeparator";
import FeatureBox from "~/components/FeatureBox";
import SectionHeader from "~/components/SectionHeader";
import { NAVIGATION, AANBOD_PAGE, INSTRUCTOR_INFO } from "~/data/siteData";

export const meta: MetaFunction = () => {
    return [
        { title: `${NAVIGATION.links.aanbod} - Typen met Kyana` },
        {
            name: "description",
            content: AANBOD_PAGE.seo.description,
        },
    ];
};

export default function Aanbod() {
    return (
        <>
            {/* Focused Aanbod Introduction - Following home styling */}
            <section className="section" style={{ paddingBottom: "var(--spacing-md)" }}>
                <div className="container">
                    <FeatureBox>
                        <div className="grid grid-2" style={{
                            alignItems: "center",
                            gap: "var(--spacing-2xl)"
                        }}>
                            {/* Text - Left Side */}
                            <div style={{ textAlign: "left" }}>
                                <h2 style={{
                                    color: "var(--primary-color)",
                                    marginBottom: "var(--spacing-md)",
                                    fontSize: "2.25rem",
                                    fontWeight: "600"
                                }}>
                                    {AANBOD_PAGE.hero.title}
                                </h2>

                                {AANBOD_PAGE.hero.intro.map((text, index) => (
                                    <p key={index} style={{
                                        fontSize: "1.1rem",
                                        lineHeight: "1.7",
                                        color: "var(--text-secondary)",
                                        marginBottom: index === AANBOD_PAGE.hero.intro.length - 1 ? 0 : "var(--spacing-md)"
                                    }} dangerouslySetInnerHTML={{ __html: text }} />
                                ))}
                            </div>

                            {/* Image - Right Side */}
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <div style={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    boxShadow: "var(--shadow-md)",
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
                        </div>
                    </FeatureBox>
                </div>
            </section>

            <SectionSeparator />

            {/* Practical Information Section - New but following home style */}
            <section className="section" style={{ paddingTop: "var(--spacing-md)", paddingBottom: "var(--spacing-md)" }}>
                <div className="container">
                    <SectionHeader
                        title={AANBOD_PAGE.practical.title}
                        subtitle={AANBOD_PAGE.practical.subtitle}
                        centered={true}
                    />

                    <div className="grid grid-3" style={{ gap: "var(--spacing-xl)", marginTop: "var(--spacing-xl)" }}>
                        {AANBOD_PAGE.practical.items.map((item, index) => {
                            const isOrange = index % 2 === 0;
                            return (
                                <FeatureBox
                                    key={index}
                                    backgroundColor={isOrange ? "var(--primary-color)" : "var(--bg-accent-light)"}
                                    style={{ color: isOrange ? "white" : "inherit" }}
                                >
                                    <h3 style={{
                                        color: isOrange ? "white" : "var(--primary-color)",
                                        fontSize: "1.6rem",
                                        fontWeight: "700",
                                        marginBottom: "var(--spacing-md)"
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: isOrange ? "rgba(255,255,255,0.95)" : "var(--text-secondary)",
                                        fontSize: "1.05rem",
                                        lineHeight: "1.7"
                                    }} dangerouslySetInnerHTML={{ __html: item.content }} />
                                </FeatureBox>
                            );
                        })}
                    </div>
                </div>
            </section>

            <SectionSeparator />

            {/* Methodology Section - Mirrored Layout (Image Left, Text Right) */}
            <section className="section" style={{ paddingTop: "var(--spacing-md)", paddingBottom: "var(--spacing-md)" }}>
                <div className="container">
                    <FeatureBox>
                        <div className="grid grid-2" style={{
                            alignItems: "center",
                            gap: "var(--spacing-2xl)"
                        }}>
                            {/* Image - Left Side */}
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center"
                            }}>
                                <img
                                    src="/typ10.png"
                                    alt="Typ10 logo"
                                    style={{
                                        maxWidth: "500px",
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>

                            {/* Text - Right Side */}
                            <div style={{ textAlign: "left" }}>
                                <h2 style={{
                                    color: "var(--primary-color)",
                                    marginBottom: "var(--spacing-md)",
                                    fontSize: "2.25rem",
                                    fontWeight: "600"
                                }}>
                                    {AANBOD_PAGE.methodology.title}
                                </h2>
                                {AANBOD_PAGE.methodology.content.map((text, index) => (
                                    <p
                                        key={index}
                                        style={{
                                            fontSize: "1.1rem",
                                            lineHeight: "1.7",
                                            color: "var(--text-secondary)",
                                            marginBottom: index === AANBOD_PAGE.methodology.content.length - 1 ? 0 : "var(--spacing-md)"
                                        }}
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                ))}
                            </div>
                        </div>
                    </FeatureBox>
                </div>
            </section>

            <SectionSeparator />

            {/* Pricing Section - Unique Styling (Soft Peach Card) */}
            <section className="section" style={{ paddingTop: "var(--spacing-md)", paddingBottom: "var(--spacing-md)" }}>
                <div className="container">
                    <FeatureBox style={{
                        background: "linear-gradient(135deg, var(--bg-accent-light) 0%, #fee8d1 100%)",
                        border: "1px solid rgba(255, 131, 85, 0.15)",
                        boxShadow: "0 20px 40px -15px rgba(255, 131, 85, 0.1)"
                    }}>
                        <div style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>
                            <h2 style={{ color: "var(--primary-color)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "var(--spacing-xs)" }}>
                                {AANBOD_PAGE.pricing.title}
                            </h2>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                                {AANBOD_PAGE.pricing.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-2" style={{ gap: "var(--spacing-xl)", marginBottom: "var(--spacing-xl)" }}>
                            {AANBOD_PAGE.pricing.tiers.map((tier, index) => (
                                <div key={index} style={{
                                    background: "white",
                                    padding: "var(--spacing-xl)",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
                                    border: "1px solid rgba(255, 131, 85, 0.1)"
                                }}>
                                    <h3 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "var(--spacing-sm)" }}>
                                        {tier.label}
                                    </h3>
                                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "var(--spacing-md)" }}>
                                        {tier.description}
                                    </p>

                                    {tier.features && (
                                        <div style={{ marginBottom: "var(--spacing-lg)", display: "flex", justifyContent: "center" }}>
                                            <ul style={{
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0,
                                                textAlign: "left"
                                            }}>
                                                {tier.features.map((feature, fIndex) => (
                                                    <li key={fIndex} style={{
                                                        fontSize: "0.95rem",
                                                        color: "var(--text-secondary)",
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: "0.6rem",
                                                        marginBottom: "0.4rem"
                                                    }}>
                                                        <span style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            width: "18px",
                                                            height: "18px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "rgba(255, 131, 85, 0.1)",
                                                            color: "var(--primary-color)",
                                                            fontSize: "0.7rem",
                                                            fontWeight: "bold",
                                                            marginTop: "0.2rem",
                                                            flexShrink: 0
                                                        }}>✓</span>
                                                        <span
                                                            style={{ textAlign: "center", width: "100%" }}
                                                            dangerouslySetInnerHTML={{ __html: feature }}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div style={{
                                        display: "inline-block",
                                        padding: "0.5rem 1.5rem",
                                        background: "var(--bg-accent-light)",
                                        borderRadius: "100px",
                                        color: "var(--primary-color)",
                                        fontWeight: "600",
                                        fontSize: "1rem"
                                    }}>
                                        {tier.priceInfo}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <a
                                href={AANBOD_PAGE.pricing.externalLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    color: "var(--primary-color)",
                                    textDecoration: "underline",
                                    fontWeight: "600",
                                    background: "none",
                                    padding: 0,
                                    fontSize: "1.05rem"
                                }}
                            >
                                {AANBOD_PAGE.pricing.externalLink.label}
                            </a>
                        </div>
                    </FeatureBox>
                </div>
            </section>

            <SectionSeparator />

            {/* Location - Same as home */}
            <LocationSection />
        </>
    );
}
