import DynamicHero from "../../../src/components/Dynamic";
import Pic1 from "../../../public/assets/img-10.png";
import Pic38 from "../../../public/assets/img-38.png";
import Pic3 from "../../../public/assets/img-6.png";
import Pic4 from "../../../public/assets/img-5.png";
import Pic5 from "../../../public/assets/img-4.png";
import Pic6 from "../../../public/assets/img-3.png";
import Pic7 from "../../../public/assets/img-2.png";

export default function FindTutor() {
  return (
    <DynamicHero
      badgeText="Find Tutor Care"
         pillText="Tutor Care Available" 
      title="Smart Learning Meets Safe and Trusted House Care."
      subtitle="Get matched with Tutor Care personnel that gives your child focused tutoring, attentive care, and extra help at home - all in one service. Services include:"
      features={[
        "Providing safe transportation and supervised care for children, including pick-up/drop-off and routine support when parents are unavailable.",
        "Delivering focused tutoring at home or on the go, strengthening core skills, homework completion, and test prep.",
        "Supporting families with light chores and mentorship, building discipline, time management, and motivation."
      ]}
      playStoreImage={Pic1}
      mainImage={Pic38}
      avatars={[Pic3, Pic4, Pic5, Pic6, Pic7]}
    />
  )
}
