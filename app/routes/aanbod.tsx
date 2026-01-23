import type { MetaFunction } from "@remix-run/cloudflare";
import Typ10Section from "~/components/sections/Typ10Section";
import LocationSection from "~/components/sections/LocationSection";
import SectionSeparator from "~/components/SectionSeparator";
import { NAVIGATION } from "~/data/siteData";

import InstructorSection from "~/components/sections/InstructorSection";

export const meta: MetaFunction = () => {
    return [
        { title: `${NAVIGATION.links.aanbod} - Typen met Kyana` },
        {
            name: "description",
            content: "Bekijk ons aanbod aan typlessen. We leren kinderen blind typen met de Typ10 methode.",
        },
    ];
};

export default function Aanbod() {
    return (
        <>
            <InstructorSection />
            <SectionSeparator />
            <Typ10Section />
            <SectionSeparator />
            <LocationSection />
        </>
    );
}
