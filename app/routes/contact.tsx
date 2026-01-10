import { useState } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import InfoCard from "~/components/cards/InfoCard";
import SectionHeader from "~/components/SectionHeader";
import { CONTACT_INFO, LOCATION_INFO, CONTACT_PAGE } from "~/data/siteData";

export const meta: MetaFunction = () => {
    return [
        { title: CONTACT_PAGE.seo.title },
        {
            name: "description",
            content: CONTACT_PAGE.seo.description,
        },
    ];
};

export default function Contact() {
    const [isRevealed, setIsRevealed] = useState(false);

    const cardBaseStyle = {
        height: "100%",
        display: "flex",
        flexDirection: "column" as const,
        border: "none",
        padding: "var(--spacing-xl)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    return (
        <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            <section className="section" style={{ paddingTop: "var(--spacing-2xl)" }}>
                <div className="container">
                    <div className="contact-header-box">
                        <SectionHeader
                            title={<span style={{ color: "var(--primary-color)" }}>{CONTACT_PAGE.header.title}</span>}
                            subtitle={CONTACT_PAGE.header.subtitle}
                        />
                    </div>

                    <div className="grid grid-2" style={{
                        gap: "var(--spacing-xl)",
                        alignItems: "stretch",
                    }}>
                        <div style={{ height: "100%" }}>
                            <InfoCard
                                title={<span style={{ color: "var(--primary-color)" }}>{CONTACT_PAGE.contacts.title}</span>}
                                className="contact-info-card"
                                style={{
                                    ...cardBaseStyle,
                                    background: "var(--bg-accent-light)",
                                    border: "none",
                                    padding: undefined, // Let CSS handle it
                                }}
                            >
                                <div style={{ position: "relative", minHeight: "210px" }}>
                                    {/* Content cross-fades in */}
                                    <div style={{
                                        opacity: isRevealed ? 1 : 0,
                                        visibility: isRevealed ? "visible" : "hidden",
                                        transition: "opacity 0.4s ease, visibility 0.4s ease",
                                        pointerEvents: isRevealed ? "auto" : "none",
                                        padding: "var(--spacing-md) 0",
                                    }}>
                                        <div style={{ marginBottom: "var(--spacing-md)" }}>
                                            <p style={{ fontWeight: "800", marginBottom: "4px", color: "var(--text-primary)", fontSize: "0.9rem" }}>
                                                {CONTACT_PAGE.contacts.phoneLabel}
                                            </p>
                                            <p style={{ color: "var(--text-primary)", fontSize: "1rem", marginBottom: 0 }}>{CONTACT_INFO.phone}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: "800", marginBottom: "4px", color: "var(--text-primary)", fontSize: "0.9rem" }}>
                                                {CONTACT_PAGE.contacts.emailLabel}
                                            </p>
                                            <p style={{ color: "var(--text-primary)", fontSize: "1rem", marginBottom: 0, wordBreak: "break-all" }}>{CONTACT_INFO.email}</p>
                                        </div>
                                    </div>

                                    {/* Button cross-fades out */}
                                    <div style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: "flex",
                                        padding: "var(--spacing-md) 0",
                                        opacity: isRevealed ? 0 : 1,
                                        visibility: isRevealed ? "hidden" : "visible",
                                        transition: "opacity 0.4s ease, visibility 0.4s ease",
                                        pointerEvents: isRevealed ? "none" : "auto"
                                    }}>
                                        <button
                                            onClick={() => setIsRevealed(true)}
                                            className="btn btn-primary"
                                            style={{ width: "100%", padding: "var(--spacing-sm)" }}
                                        >
                                            Toon contactgegevens
                                        </button>
                                    </div>
                                </div>
                            </InfoCard>
                        </div>

                        <div style={{ height: "100%" }}>
                            <InfoCard
                                className="contact-info-card"
                                style={{
                                    ...cardBaseStyle,
                                    background: "var(--bg-accent-light)",
                                    border: "none",
                                    padding: undefined, // Let CSS handle it
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                                }}
                            >
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <p style={{ color: "var(--text-secondary)", marginBottom: "var(--spacing-md)" }}>
                                        <strong style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}>
                                            {LOCATION_INFO.inPerson.name}
                                        </strong>
                                        <br />
                                        <span style={{ fontSize: "1rem" }}>{LOCATION_INFO.inPerson.address.street}</span>
                                        <br />
                                        <span style={{ fontSize: "1rem" }}>{LOCATION_INFO.inPerson.address.city}</span>
                                    </p>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "var(--spacing-sm)" }}>
                                        {LOCATION_INFO.inPerson.details}
                                    </p>
                                </div>

                                <div style={{
                                    width: "100%",
                                    height: "250px",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    marginTop: "auto",
                                    boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.1)"
                                }}>
                                    <iframe
                                        src={LOCATION_INFO.inPerson.googleMapsEmbedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Locatie Praktijk Boost"
                                    ></iframe>
                                </div>
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
