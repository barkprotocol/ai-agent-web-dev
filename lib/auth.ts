import { PrivyClient } from "@privy-io/react-auth"
import { toast } from "sonner"

const privy = new PrivyClient({
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
})

export async function signIn(email: string): Promise<void> {
  try {
    await privy.sendLoginEmail({ email })
    toast.success("Sign-in link sent to your email.")
  } catch (error) {
    console.error("Error during sign in:", error)
    toast.error("Failed to sign in. Please try again.")
    throw new Error("Failed to sign in. Please try again.")
  }
}

export async function signInWithGoogle(): Promise<void> {
  try {
    await privy.loginWithGoogle()
    toast.success("Signed in with Google successfully.")
  } catch (error) {
    console.error("Error during Google sign in:", error)
    toast.error("Failed to sign in with Google. Please try again.")
    throw new Error("Failed to sign in with Google. Please try again.")
  }
}

export async function signOut(): Promise<void> {
  try {
    await privy.logout()
    toast.success("Signed out successfully.")
  } catch (error) {
    console.error("Error during sign out:", error)
    toast.error("Failed to sign out. Please try again.")
    throw new Error("Failed to sign out. Please try again.")
  }
}

