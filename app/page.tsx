import { Suspense } from 'react';
import { Header } from "@/components/ui/layout/header";
import Hero from "@/components/ui/layout/hero";
import Features from "@/components/ui/layout/features";
import HowItWorks from "@/components/ui/layout/how-it-works";
import { CTA } from "@/components/ui/layout/cta";
import { FAQ } from "@/components/ui/layout/faq";
import { Footer } from "@/components/ui/layout/footer";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Suspense fallback={<LoadingSpinner />}>
          <section aria-labelledby="hero-heading">
            <h2 id="hero-heading" className="sr-only">Welcome to BARK AI Agent</h2>
            <Hero />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section aria-labelledby="features-heading" className="bg-muted py-16 sm:py-24">
            <h2 id="features-heading" className="sr-only">Our Features</h2>
            <Features />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section aria-labelledby="how-it-works-heading" className="py-16 sm:py-24">
            <h2 id="how-it-works-heading" className="sr-only">How It Works</h2>
            <HowItWorks />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section aria-labelledby="cta-heading" className="bg-muted py-16 sm:py-24">
            <h2 id="cta-heading" className="sr-only">AI Agents</h2>
            <CTA />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <section aria-labelledby="faq-heading" className="py-16 sm:py-24">
            <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>
            <FAQ />
          </section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

