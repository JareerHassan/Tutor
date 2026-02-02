import TutorSitter from "../../src/components/TutorSitter/Sitter"
import Card from "@/src/components/Tutors/Cards";
import BanerPage from "../../src/components/Tutors/Banner";

export default function Sitter() {
  return (
    <div>
      <TutorSitter />
      <Card />
      <BanerPage />
    </div>
  );
}