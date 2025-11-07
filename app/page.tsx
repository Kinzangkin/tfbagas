import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portofolio from "@/components/Portofolio";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Aboutme />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="">
        <Portofolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
