import React from "react";

export default function SectionSeparator() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            padding: "var(--spacing-md) 0",
            opacity: 0.8
        }}>
            <div style={{
                width: "40px",
                height: "4px",
                backgroundColor: "var(--primary-hover)",
                borderRadius: "10px"
            }} />
            <div style={{
                width: "12px",
                height: "4px",
                backgroundColor: "var(--primary-hover)",
                borderRadius: "10px"
            }} />
            <div style={{
                width: "40px",
                height: "4px",
                backgroundColor: "var(--primary-hover)",
                borderRadius: "10px"
            }} />
        </div>
    );
}
