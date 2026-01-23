import type { MetaFunction } from "@remix-run/cloudflare";
import AboutSection from "~/components/sections/AboutSection";
import { NAVIGATION } from "~/data/siteData";

export const meta: MetaFunction = () => {
    return [
        { title: `${NAVIGATION.links.overMij} - Typen met Kyana` },
        {
            name: "description",
            content: "Lees meer over Kyana en haar passie voor het aanleren van blind typen aan kinderen.",
        },
    ];
};

export default function OverMij() {
    return (
        <div style={{ paddingTop: "var(--spacing-xl)" }}>
            <AboutSection />
        </div>
    );
}
