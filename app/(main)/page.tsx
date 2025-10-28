import Benefits from "@/components/Benefits";
import Effective from "@/components/Effective";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Study from "@/components/Study";
import Trusted from "@/components/Trusted";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="pt-4 overflow-x-hidden  md:pt-0 bg-black">
      <Hero />
      <Trusted />
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
