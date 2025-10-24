import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Study from "@/components/Study";

export default function Home() {
  return (
    <main className="pt-4 md:pt-12 bg-black">
      <Hero />
      <Services />
      <Process />
      <Study />
      <Benefits />
      <Pricing />
    </main>
  );
}
