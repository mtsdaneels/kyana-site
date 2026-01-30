import Button from "~/components/Button";
import { INSTRUCTOR_INFO, HOMEPAGE_CONTENT } from "~/data/siteData";
import SectionHeader from "~/components/SectionHeader";
import FeatureBox from "~/components/FeatureBox";

export default function AboutSection({ showHeader = true, isStandalone = false }: { showHeader?: boolean, isStandalone?: boolean }) {
    return (
        <section
            id="over-mij"
            className="section"
            style={{
                paddingTop: isStandalone ? "var(--spacing-2xl)" : "var(--spacing-md)",
                paddingBottom: "var(--spacing-md)"
            }}
        >
            <div className="container">
                {showHeader && (
                    <SectionHeader
                        title="Over Mij"
                        centered={true}
                    />
                )}

                <FeatureBox style={{ marginTop: showHeader ? "var(--spacing-lg)" : "0" }}>
                    <div className="grid grid-2 gap-xl" style={{ alignItems: "center" }}>
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
                                    alt={`${INSTRUCTOR_INFO.name} - Typles Ingelmunster`}
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
                            }} dangerouslySetInnerHTML={{ __html: INSTRUCTOR_INFO.bio }} />

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

                            {!isStandalone && (
                                <div style={{ marginTop: "var(--spacing-lg)" }}>
                                    <Button to="/over-mij">
                                        {HOMEPAGE_CONTENT.sections.about.cta}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </FeatureBox>
            </div>
        </section>
    );
}
