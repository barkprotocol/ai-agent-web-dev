import type { Metadata } from "next"
import Image from "next/image"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login | BARK AI Agent",
  description: "Login to your BARK AI Agent account",
}

export default function LoginPage() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Image
        src="https://ucarecdn.com/f6029e68-9768-49db-80a9-64e41e70acff/waveblack.png"
        alt="BARK AI Agent Login Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="z-20 w-full max-w-md px-4">
        <div className="bg-background/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome to BARK AI Agent</h1>
            <p className="text-sm text-muted-foreground">Sign in to access your AI Agent Dashboard</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

