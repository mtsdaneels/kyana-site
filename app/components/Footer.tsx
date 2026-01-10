import { GLOBAL_UI, NAVIGATION } from "~/data/siteData";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p>© {currentYear} {NAVIGATION.brand} - {GLOBAL_UI.footer.rights}</p>
                    <p style={{ fontSize: "0.9rem" }}>
                        {GLOBAL_UI.footer.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
}
