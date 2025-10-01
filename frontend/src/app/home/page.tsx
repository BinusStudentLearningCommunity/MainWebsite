
import mainImage from "./mainImage.svg";
import ExploreRoles from "@/components/ExploreRoles";
import AboutUs from "./AboutUs";
import Image from "next/image";
import History from "./History";
import Contact from "./Contact";
import Hero from "./Hero";
import Wheel from "./Wheel";
import VisionMission from "./VisionMission"; 

export default function Home() {
  return (
    <main>
      <Hero backgroundImageSrc={mainImage} />

      <div className="relative">
        <AboutUs />
      </div>
      <section id="visimisi">
        <VisionMission />
      </section>

      <section
        id="about"
        className="bg-slate-100 flex flex-col justify-center items-center text-center px-4"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <ExploreRoles />
      </section>

      <section id="history">
        <History />
      </section>

      <section id="wheel">
        <Wheel />
      </section>

      <section id="contact-form">
        <Contact />
      </section>
    </main>
  );
}
