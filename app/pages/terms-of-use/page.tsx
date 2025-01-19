import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Terms of Use | Bark AI Agent',
  description: 'Terms of Use for the Bark AI Agent',
}

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using the Bark AI Agent Dashboard, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Use of Service</h2>
          <p>You agree to use the Bark AI Agent Dashboard only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
          <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Bark AI Agent Dashboard are protected under applicable copyrights, trademarks and other proprietary rights.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
          <p>Bark AI Agent Dashboard and its affiliates, officers, employees, agents, partners and licensors shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from your use of the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Modifications to Service</h2>
          <p>We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Bark AI Agent Dashboard (or any part thereof) with or without notice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
          <p>These Terms of Use and any disputes arising out of or related to the use of the Bark AI Agent Dashboard shall be governed by and construed and enforced in accordance with the laws of [Your Jurisdiction].</p>
        </section>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}

