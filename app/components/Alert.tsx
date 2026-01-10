interface AlertProps {
    type: "success" | "error" | "info";
    message: string;
}

const alertStyles = {
    success: {
        background: "#f0fdf4",
        border: "1px solid #86efac",
        color: "#15803d",
    },
    error: {
        background: "#fef2f2",
        border: "1px solid #fca5a5",
        color: "#dc2626",
    },
    info: {
        background: "#fff7ed",
        border: "1px solid #fdba74",
        color: "#c2410c",
    },
};

export default function Alert({ type, message }: AlertProps) {
    const style = alertStyles[type];

    return (
        <div
            style={{
                padding: "var(--spacing-md)",
                background: style.background,
                border: style.border,
                borderRadius: "var(--radius-md)",
                marginBottom: "var(--spacing-lg)",
                color: style.color,
            }}
        >
            {message}
        </div>
    );
}
