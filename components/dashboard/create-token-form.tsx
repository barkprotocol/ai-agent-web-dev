"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { deployCustomToken, type TokenMetadata } from "@/utils/solana-agent"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(1, "Token name is required").max(32, "Token name must be 32 characters or less"),
  symbol: z.string().min(2, "Symbol must be at least 2 characters").max(10, "Symbol must be 10 characters or less"),
  uri: z.string().url("Must be a valid URL"),
  decimals: z.number().int().min(0).max(9),
  initialSupply: z.number().int().positive(),
})

export function CreateTokenForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      symbol: "",
      uri: "",
      decimals: 9,
      initialSupply: 1000000,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const tokenMetadata: TokenMetadata = {
        name: values.name,
        symbol: values.symbol,
        uri: values.uri,
        decimals: values.decimals,
        initialSupply: values.initialSupply,
      }

      const mintAddress = await deployCustomToken(tokenMetadata)
      toast.success("Token created successfully", {
        description: `Mint address: ${mintAddress}`,
      })
      form.reset()
      router.push("/dashboard")
    } catch (error) {
      toast.error("Failed to create token", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Token</CardTitle>
        <CardDescription>Deploy a custom token on the Solana blockchain</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Token Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Custom Token" {...field} />
                  </FormControl>
                  <FormDescription>The name of your token (max 32 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="symbol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Token Symbol</FormLabel>
                  <FormControl>
                    <Input placeholder="MCT" {...field} />
                  </FormControl>
                  <FormDescription>A short identifier for your token (2-10 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uri"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Metadata URI</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/token-metadata.json" {...field} />
                  </FormControl>
                  <FormDescription>A URL pointing to the token&apos;s metadata JSON file</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="decimals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decimals</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseInt(e.target.value, 10))}
                    />
                  </FormControl>
                  <FormDescription>The number of decimal places for your token (0-9)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="initialSupply"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initial Supply</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseInt(e.target.value, 10))}
                    />
                  </FormControl>
                  <FormDescription>The initial number of tokens to mint</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Token
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

