import { Link } from "@remix-run/react";
import React from "react";

interface ButtonProps {
    to?: string;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "dark";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    style?: React.CSSProperties;
    target?: string;
    rel?: string;
}

export default function Button({
    to,
    href,
    onClick,
    children,
    variant = "primary",
    size = "md",
    className = "",
    style = {},
    target,
    rel
}: ButtonProps) {
    const baseClass = "btn";
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const fullClassName = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={fullClassName} style={style}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={fullClassName} style={style} target={target} rel={rel}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={fullClassName} style={style}>
            {children}
        </button>
    );
}
