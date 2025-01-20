import { EAPTransactionVerification } from "@/components/eap/eap-ransaction-verification"

export default function EAPVerificationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">EAP Transaction Verification</h1>
      <EAPTransactionVerification />
    </div>
  )
}

