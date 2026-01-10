interface SectionHeaderProps {
    title: string | React.ReactNode;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    return (
        <div className={`mb-xl ${centered ? "text-center" : ""}`}>
            <h1>{title}</h1>
            {subtitle && (
                <p
                    style={{
                        fontSize: "1.125rem",
                        maxWidth: "700px",
                        margin: centered ? "0 auto" : "0",
                        color: "var(--text-secondary)",
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
