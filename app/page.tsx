import Image from "next/image";
import Hero from "../src/components/home/Hero"
import FeaturesAndWork from "../src/components/home/Feature"
import Features from "../src/components/home/SmartFeature"
import Tutors from "../src/components/home/Tutor"
import Selfs from "../src/components/home/Self"
import Crousals from "../src/components/home/Crousal"
import Testimonials from "../src/components/home/Testimonial"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesAndWork />
      <Features />
      <Tutors />
      <Selfs />
      <Crousals />
   <Testimonials />
    </div>
  );
}
