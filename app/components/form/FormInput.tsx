interface FormInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "tel" | "date" | "time";
    placeholder?: string;
    required?: boolean;
    error?: string;
    min?: string;
}

export default function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    error,
    min,
}: FormInputProps) {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {label} {required && "*"}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="form-input"
                placeholder={placeholder}
                required={required}
                min={min}
            />
            {error && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "var(--spacing-xs)" }}>
                    {error}
                </p>
            )}
        </div>
    );
}
