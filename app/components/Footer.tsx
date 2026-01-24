import { GLOBAL_UI, NAVIGATION } from "~/data/siteData";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <p>Copyright © {currentYear} - {NAVIGATION.brand}</p>
                </div>
            </div>
        </footer>
    );
}
