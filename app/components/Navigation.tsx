import { useState, useEffect } from "react";
import { Link, useLocation } from "@remix-run/react";
import { NAVIGATION } from "~/data/siteData";

export default function Navigation() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path ? "active" : "";
    };

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav>
            <div className="nav-container" style={{ justifyContent: "center" }}>
                <button
                    className={`menu-toggle ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    style={{ position: "absolute", right: "var(--spacing-md)", top: "50%", transform: "translateY(-50%)" }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/" className={`nav-link ${isActive("/")}`}>
                            {NAVIGATION.links.home}
                        </Link>
                    </li>
                    <li>
                        <Link to="/#aanbod" className="nav-link" onClick={() => setIsOpen(false)}>
                            {NAVIGATION.links.aanbod}
                        </Link>
                    </li>
                    <li>
                        <Link to="/#over-mij" className="nav-link" onClick={() => setIsOpen(false)}>
                            {NAVIGATION.links.overMij}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>
                            {NAVIGATION.links.contact}
                        </Link>
                    </li>
                    <li>
                        <Link to="/boeken" className={`nav-link ${isActive("/boeken")}`}>
                            {NAVIGATION.links.boeken}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
