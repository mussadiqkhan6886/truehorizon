import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="pt-4 md:pt-12 bg-black">
      <Hero />
      <Services />
      <Process />
    </main>
  );
}
