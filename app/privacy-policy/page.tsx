import type { Metadata } from "next"
import { sharedMetadata } from "@/components/shared-metadata"

export const metadata: Metadata = sharedMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for the BARK AI Agent platform",
  keywords: ["privacy", "data protection", "user rights"],
})

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: [Current Date]</p>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, use our services, or
          communicate with us. This may include your name, email address, wallet address, and trading preferences.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Personalize and improve your experience</li>
        </ul>
        <h2>3. Information Sharing and Disclosure</h2>
        <p>
          We do not share your personal information with third parties except as described in this policy or with your
          consent.
        </p>
        <h2>4. Data Security</h2>
        <p>
          We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized
          access, disclosure, alteration, and destruction.
        </p>
        <h2>5. Your Rights and Choices</h2>
        <p>
          You may update, correct, or delete your account information at any time by logging into your account or
          contacting us.
        </p>
        <h2>6. Changes to this Policy</h2>
        <p>
          We may change this privacy policy from time to time. If we make changes, we will notify you by revising the
          date at the top of the policy.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at{" "}
          <a href="mailto:privacy@barkprotocol.com">privacy@barkprotocol.com</a>.
        </p>
      </div>
    </div>
  )
}

