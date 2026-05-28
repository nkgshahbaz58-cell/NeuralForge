"use client";

import Background from "@/components/neuralforge/Background";
import Header from "@/components/neuralforge/Header";
import Hero from "@/components/neuralforge/Hero";
import About from "@/components/neuralforge/About";
import Services from "@/components/neuralforge/Services";
import Portfolio from "@/components/neuralforge/Portfolio";
import Features from "@/components/neuralforge/Features";
import Process from "@/components/neuralforge/Process";
import Results from "@/components/neuralforge/Results";
import Pricing from "@/components/neuralforge/Pricing";
import RequestForm from "@/components/neuralforge/RequestForm";
import Testimonials from "@/components/neuralforge/Testimonials";
import FAQ from "@/components/neuralforge/FAQ";
import FinalCTA from "@/components/neuralforge/FinalCTA";
import Footer from "@/components/neuralforge/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05060B] font-inter text-white antialiased selection:bg-violet-400/30 selection:text-white">
      <Background />

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Features />
        <Process />
        <Results />
        <Pricing />
        <Testimonials />
        <RequestForm />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>

      {/* Global smooth scroll & base typography */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #05060B;
        }
      `}</style>
    </main>
  );
}
