import DynamicHero from "../../../src/components/Dynamic";
import Pic1 from "../../../public/assets/img-10.png";
import Pic38 from "../../../public/assets/img-38.png";
import Pic3 from "../../../public/assets/img-6.png";
import Pic4 from "../../../public/assets/img-5.png";
import Pic5 from "../../../public/assets/img-4.png";
import Pic6 from "../../../public/assets/img-3.png";
import Pic7 from "../../../public/assets/img-2.png";

export default function TutorSitter() {
    return (
        <DynamicHero
            badgeText="Find Just Sitter"
            pillText="Tutor Care Available"
            title="Trusted, reliable babysitters providing safe in-home care when parents can’t be there."
            subtitle="Get matched with a housekeeper that brings real relief - cleaning, tidying, and support that makes your day easier from the moment you step in. Services include:"
            features={[
                "Providing gentle, attentive babysitting that keeps your baby safe, calm, and comforted at all times.",
                "Offering reliable baby care that fits your schedule - daytime, evenings, weekends, or last-minute needs.",
                "Following your baby’s routine closely - feeding, diaper changes, naps, and playtime - for consistent, parent-approved care."
            ]}
            playStoreImage={Pic1}
            mainImage={Pic38}
            avatars={[Pic3, Pic4, Pic5, Pic6, Pic7]}
        />
    )
}
