import DynamicHero from "../../../src/components/Dynamic";
import Pic1 from "../../../public/assets/img-10.png";
import Pic38 from "../../../public/assets/img-38.png";
import Pic3 from "../../../public/assets/img-6.png";
import Pic4 from "../../../public/assets/img-5.png";
import Pic5 from "../../../public/assets/img-4.png";
import Pic6 from "../../../public/assets/img-3.png";
import Pic7 from "../../../public/assets/img-2.png";

export default function JustTutor() {
    return (
        <DynamicHero
            badgeText="Find Just Care"
            pillText="Tutor Care Available"
            title="Dependable House Care that handles the mess and the chores - so you can focus on life, not laundry."
            subtitle="Get matched with a housekeeper that brings real relief - cleaning, tidying, and support that makes your day easier from the moment you step in. Services include:"
            features={[
                "Providing thorough home cleaning and upkeep, keeping every room fresh, organized, and comfortable.",
                "Handling everyday house chores, including laundry, dishes, tidying, and light meal prep to reduce your workload.",
                "Running essential errands, such as grocery shopping, pickups, and deliveries, helping your home stay on track."
            ]}
            playStoreImage={Pic1}
            mainImage={Pic38}
            avatars={[Pic3, Pic4, Pic5, Pic6, Pic7]}
        />
    )
}
