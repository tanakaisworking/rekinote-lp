import { Header } from "@/components/en/Header";
import { Hero } from "@/components/en/Hero";
import { Problem } from "@/components/en/Problem";
import { Features } from "@/components/en/Features";
import { WorksWith } from "@/components/en/WorksWith";
import { Compare } from "@/components/en/Compare";
import { HowItWorks } from "@/components/en/HowItWorks";
import { Privacy } from "@/components/en/Privacy";
import { FinalCTA } from "@/components/en/FinalCTA";
import { Footer } from "@/components/en/Footer";

export default function EnLpPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <WorksWith />
        <Compare />
        <Privacy />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
