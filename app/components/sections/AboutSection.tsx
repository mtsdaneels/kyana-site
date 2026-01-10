import { INSTRUCTOR_INFO } from "~/data/siteData";
import SectionHeader from "~/components/SectionHeader";
import FeatureBox from "~/components/FeatureBox";

export default function AboutSection() {
    return (
        <section id="over-mij" className="section" style={{ paddingTop: "var(--spacing-md)", paddingBottom: "var(--spacing-md)" }}>
            <div className="container">
                <SectionHeader
                    title="Over Mij"
                    centered={true}
                />

                <FeatureBox style={{ marginTop: "var(--spacing-lg)" }}>
                    <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-xl)" }}>
                        {/* Teacher Photo - Left Side */}
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

                        {/* Instructor Info - Right Side */}
                        <div>
                            <h3 style={{
                                color: "var(--primary-color)",
                                marginBottom: "var(--spacing-md)",
                                fontSize: "1.75rem",
                                fontWeight: "600"
                            }}>
                                {INSTRUCTOR_INFO.name}
                            </h3>

                            <p style={{
                                fontSize: "1.1rem",
                                lineHeight: "1.7",
                                color: "var(--text-secondary)",
                                marginBottom: "var(--spacing-lg)"
                            }}>
                                {INSTRUCTOR_INFO.bio}
                            </p>

                            {INSTRUCTOR_INFO.qualifications.length > 0 && (
                                <div>
                                    <h4 style={{
                                        fontSize: "1.1rem",
                                        fontWeight: "600",
                                        marginBottom: "var(--spacing-sm)",
                                        color: "var(--text-primary)"
                                    }}>
                                        {INSTRUCTOR_INFO.qualificationsLabel}
                                    </h4>
                                    <ul style={{
                                        listStyle: "none",
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "var(--spacing-xs)"
                                    }}>
                                        {INSTRUCTOR_INFO.qualifications.map((qual, index) => (
                                            <li key={index} style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "var(--spacing-sm)",
                                                color: "var(--text-secondary)"
                                            }}>
                                                <span style={{
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "var(--primary-color)",
                                                    display: "block"
                                                }} />
                                                {qual}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </FeatureBox>
            </div>
        </section>
    );
}
