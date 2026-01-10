interface FormSelectProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    required?: boolean;
    error?: string;
    placeholder?: string;
}

export default function FormSelect({
    label,
    name,
    options,
    required = false,
    error,
    placeholder = "Select an option",
}: FormSelectProps) {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {label} {required && "*"}
            </label>
            <select
                id={name}
                name={name}
                className="form-select"
                required={required}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "var(--spacing-xs)" }}>
                    {error}
                </p>
            )}
        </div>
    );
}
