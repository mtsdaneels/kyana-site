import React from "react";

interface FeatureBoxProps {
    children: React.ReactNode;
    padding?: string;
    backgroundColor?: string;
    shadow?: string;
    borderRadius?: string;
    style?: React.CSSProperties;
}

export default function FeatureBox({
    children,
    padding = "var(--spacing-2xl)",
    backgroundColor = "var(--bg-accent-light)",
    shadow,
    borderRadius = "24px",
    style
}: FeatureBoxProps) {
    return (
        <div
            className="feature-box"
            style={{
                backgroundColor,
                padding: padding !== "var(--spacing-2xl)" ? padding : undefined,
                borderRadius: borderRadius !== "24px" ? borderRadius : undefined,
                boxShadow: shadow,
                ...style
            }}
        >
            {children}
        </div>
    );
}
