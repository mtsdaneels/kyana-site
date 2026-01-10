import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import SectionHeader from "~/components/SectionHeader";

export const meta: MetaFunction = () => {
    return [
        { title: "Afspraak Boeken - Typen met Kyana" },
        {
            name: "description",
            content: "Boek eenvoudig een afspraak voor typlessen via onze online agenda.",
        },
    ];
};

export default function Boeken() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const scripts = document.querySelectorAll('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            scripts.forEach(s => s.remove());
        };
    }, []);

    return (
        <section className="section" style={{ paddingTop: "var(--spacing-2xl)" }}>
            <div className="container">
                <SectionHeader
                    title="Afspraak Boeken"
                    subtitle="Kies hieronder een geschikt moment in de agenda."
                />

                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/matiasdaneels/new-meeting?hide_gdpr_banner=1&background_color=ffffff&primary_color=ff8355&text_color=0f172a"
                    style={{ minWidth: "320px", height: "700px" }}
                ></div>
            </div>
        </section>
    );
}
