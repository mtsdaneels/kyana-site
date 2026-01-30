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
            <div className="nav-container" style={{ justifyContent: "center", position: "relative" }}>
                <button
                    className={`menu-toggle ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/" className={`nav-link ${isActive("/")}`} onClick={() => setIsOpen(false)}>
                            {NAVIGATION.links.home}
                        </Link>
                    </li>
                    <li>
                        <Link to="/aanbod" className={`nav-link ${isActive("/aanbod")}`} onClick={() => setIsOpen(false)}>
                            {NAVIGATION.links.aanbod}
                        </Link>
                    </li>
                    <li>
                        <Link to="/over-mij" className={`nav-link ${isActive("/over-mij")}`} onClick={() => setIsOpen(false)}>
                            {NAVIGATION.links.overMij}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={() => setIsOpen(false)}>
                            {NAVIGATION.links.contact}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
