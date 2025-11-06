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
      <div>
        <Hero />
      </div>
      <div>
        <Aboutme />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Portofolio />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
