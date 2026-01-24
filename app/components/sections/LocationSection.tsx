import InfoCard from "../cards/InfoCard";
import SectionHeader from "../SectionHeader";
import { LOCATION_INFO } from "~/data/siteData";

export default function LocationSection() {
    return (
        <section className="section" style={{ background: "var(--bg-accent-light)", paddingTop: "var(--spacing-xl)", paddingBottom: "var(--spacing-xl)", marginTop: "var(--spacing-md)" }}>
            <div className="container">
                <SectionHeader
                    title={LOCATION_INFO.title}
                    subtitle={LOCATION_INFO.subtitle}
                    centered={true}
                />
                <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-lg)", alignItems: "stretch" }}>
                    <div style={{ display: "flex" }}>
                        <InfoCard>
                            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <p style={{ marginBottom: "var(--spacing-md)" }}>
                                    <strong style={{ color: "var(--text-primary)", fontSize: "1.25rem" }}>
                                        {LOCATION_INFO.inPerson.name}
                                    </strong>
                                    <br />
                                    {LOCATION_INFO.inPerson.address.street}
                                    <br />
                                    {LOCATION_INFO.inPerson.address.city}
                                </p>
                                <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                                    {LOCATION_INFO.inPerson.details}
                                </p>
                            </div>
                        </InfoCard>
                    </div>
                    <div style={{
                        width: "100%",
                        height: "350px",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        boxShadow: "var(--shadow-md)"
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
                </div>
            </div>
        </section>
    );
}
