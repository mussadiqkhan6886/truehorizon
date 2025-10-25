import Benefits from "@/components/Benefits";
import Effective from "@/components/Effective";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Study from "@/components/Study";

export default function Home() {
  return (
    <main className="pt-4 overflow-x-hidden  md:pt-12 bg-black">
      <Hero />
      <Services />
      <Process />
      <Study />
      <Benefits />
      <Effective />
      <Pricing />
      <Reviews />
      <FAQ />
    </main>
  );
}
