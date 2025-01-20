'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./dashboard-preview";

export function CTA() {
  return (
    <section 
      className="cta-section relative bg-black py-24" 
      aria-labelledby="cta-heading"
    >
      {/* Light image overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://ucarecdn.com/2f7da425-4da6-48d1-adcd-834c2c63c1fb/aiagent.jpeg"
          alt="AI Agent Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left lg:max-w-xl">
            <h2 id="cta-heading" className="text-4xl font-bold mb-6 text-white">
              Empower Solana with Capilot AI
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the future of Solana development with the Capilot AI Agent. Revolutionize your blockchain interactions and boost productivity today.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="font-medium px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors"
            >
              <Link href="/home">
                Access Your Dashboard
              </Link>
            </Button>
          </div>
          <div className="w-full max-w-2xl lg:max-w-3xl">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

