'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section 
      className="cta-section relative bg-cover bg-center py-16" 
      aria-labelledby="cta-heading"
      style={{ backgroundImage: 'url("/cta-background.jpg")' }}
    >
      {/* Black overlay with transparency */}
      <div className="cta-overlay absolute inset-0 bg-black opacity-90" aria-hidden="true"></div>

      <div className="container mx-auto text-center relative z-10 px-4 md:px-8">
        <h2 id="cta-heading" className="cta-heading text-3xl font-bold mb-4 text-primary-foreground">
          Ready to Empower Your Community?
        </h2>
        <p className="cta-description text-xl mb-8 text-primary-foreground/80">
          Start using the BARK AI Agent today and revolutionize your community's engagement with cutting-edge AI technology.
        </p>
        <Button 
          asChild 
          size="lg" 
          variant="secondary"
          className="font-semibold px-8 py-3 text-lg"
        >
          <Link href="/dashboard">
            Access Your Dashboard
          </Link>
        </Button>
      </div>
    </section>
  );
}

