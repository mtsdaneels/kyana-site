import { ReactNode, CSSProperties } from "react";

interface InfoCardProps {
    title?: string | ReactNode;
    children: ReactNode;
    icon?: string;
    style?: CSSProperties;
    className?: string;
}

export default function InfoCard({ title, children, icon, style, className }: InfoCardProps) {
    return (
        <div className={`card ${className || ""}`} style={style}>
            {(title || icon) && (
                <h3 style={{ marginBottom: "var(--spacing-md)" }}>
                    {icon && `${icon} `}
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
}
