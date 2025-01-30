import type { Metadata } from "next"
import Link from "next/link"
import { SignUpForm } from "@/components/ui/signup-form"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sign Up | BARK AI Agent",
  description: "Create a new BARK AI Agent account",
}

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your email to sign up for a new account</p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="hover:text-brand underline underline-offset-4">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

