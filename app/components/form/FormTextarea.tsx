interface FormTextareaProps {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    minHeight?: string;
}

export default function FormTextarea({
    label,
    name,
    placeholder,
    required = false,
    error,
    minHeight = "150px",
}: FormTextareaProps) {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {label} {required && "*"}
            </label>
            <textarea
                id={name}
                name={name}
                className="form-textarea"
                placeholder={placeholder}
                required={required}
                style={{ minHeight }}
            />
            {error && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "var(--spacing-xs)" }}>
                    {error}
                </p>
            )}
        </div>
    );
}
