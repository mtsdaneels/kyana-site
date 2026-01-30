import Button from "~/components/Button";
import { TYP10_CONTENT, HOMEPAGE_CONTENT } from "~/data/siteData";
import SectionHeader from "~/components/SectionHeader";
import FeatureBox from "~/components/FeatureBox";

export default function Typ10Section() {
    return (
        <section id="aanbod" className="section" style={{ paddingTop: "var(--spacing-md)", paddingBottom: "var(--spacing-md)" }}>
            <div className="container">
                <SectionHeader title="Aanbod" centered={true} />

                <div className="grid grid-3 gap-xl">
                    {TYP10_CONTENT.sections.map((section, index) => {
                        const isMainOrange = index === 0 || index === 2;
                        const bgColor = isMainOrange ? "var(--primary-color)" : "var(--bg-accent-light)";
                        const titleColor = isMainOrange ? "#ffffff" : "var(--primary-color)";
                        const textColor = isMainOrange ? "rgba(255, 255, 255, 0.95)" : "var(--text-secondary)";

                        return (
                            <FeatureBox
                                key={index}
                                backgroundColor={bgColor}
                                shadow={isMainOrange ? "var(--shadow-md)" : "var(--shadow-sm)"}
                                borderRadius="24px"
                                style={{ height: "100%", transition: "transform 0.2s ease" }}
                            >
                                <h3 style={{
                                    marginBottom: "var(--spacing-md)",
                                    fontSize: "1.6rem",
                                    color: titleColor,
                                    fontWeight: "700"
                                }}>
                                    {section.title}
                                </h3>

                                {Array.isArray(section.content) ? (
                                    <div style={{ display: "grid", gap: "1rem" }}>
                                        {section.content.map((paragraph, pIndex) => (
                                            <p key={pIndex} style={{
                                                color: textColor,
                                                lineHeight: "1.7",
                                                fontSize: "1.05rem",
                                                marginBottom: 0
                                            }} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                        ))}
                                    </div>
                                ) : (
                                    <p style={{
                                        color: textColor,
                                        lineHeight: "1.7",
                                        fontSize: "1.05rem",
                                        marginBottom: 0
                                    }} dangerouslySetInnerHTML={{ __html: section.content as string }} />
                                )}
                            </FeatureBox>
                        );
                    })}
                </div>

                <div style={{ textAlign: "center", marginTop: "var(--spacing-xl)" }}>
                    <Button to="/aanbod" size="lg">
                        {HOMEPAGE_CONTENT.sections.instructor.cta}
                    </Button>
                </div>
            </div>
        </section>
    );
}
