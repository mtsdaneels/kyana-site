import { TYP10_CONTENT } from "~/data/siteData";
import FeatureBox from "~/components/FeatureBox";

export default function InstructorSection() {
    return (
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
                                {TYP10_CONTENT.title}
                            </h2>

                            {Array.isArray(TYP10_CONTENT.intro) ? (
                                TYP10_CONTENT.intro.map((text, index) => (
                                    <p
                                        key={index}
                                        style={{
                                            fontSize: "1.1rem",
                                            lineHeight: "1.7",
                                            color: "var(--text-secondary)",
                                            marginBottom: index === TYP10_CONTENT.intro.length - 1 ? 0 : "var(--spacing-md)"
                                        }}
                                        dangerouslySetInnerHTML={{ __html: text }}
                                    />
                                ))
                            ) : (
                                <p
                                    style={{
                                        fontSize: "1.1rem",
                                        lineHeight: "1.7",
                                        color: "var(--text-secondary)"
                                    }}
                                    dangerouslySetInnerHTML={{ __html: TYP10_CONTENT.intro }}
                                />
                            )}
                        </div>

                        {/* Image - Right Side */}
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
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
                    </div>
                </FeatureBox>
            </div>
        </section>
    );
}
