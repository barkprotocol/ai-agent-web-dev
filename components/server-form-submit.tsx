"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ServerFormData, RoleData, DiscordServer } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be 100 characters or less"),
  icon: z.string().url("Must be a valid URL").optional(),
  description: z.string().max(200, "Description must be 200 characters or less"),
  details: z.string().max(1000, "Detailed description must be 1000 characters or less"),
  ownerWallet: z.string().min(1, "Owner wallet is required"),
  roles: z.array(z.string()),
})

interface ServerFormSubmitProps {
  formData: ServerFormData
  roleData: RoleData
}

const ServerFormSubmit = ({ formData, roleData }: ServerFormSubmitProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: formData.title,
      icon: formData.icon,
      description: formData.description,
      details: formData.details,
      ownerWallet: formData.ownerWallet,
      roles: formData.roles,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      const response = await createOrEditGuild({
        guildId: formData.id,
        ...values,
      })
      console.log("Guild created/edited successfully:", response)
      toast({
        title: "Success",
        description: "Your server has been updated successfully.",
      })
    } catch (error) {
      console.error("Error during submission:", error)
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Mock API function (unchanged)
  const createOrEditGuild = async (guildData: any): Promise<DiscordServer> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "1234",
          name: guildData.title || "Default Guild",
          icon: guildData.icon || "default-icon.png",
          description: guildData.description || "",
          detailedDescription: guildData.details || "",
          roles: guildData.roles.map((roleId: string) => ({
            id: roleId,
            name: `Role ${roleId}`,
            price: "10",
            enabled: true,
          })),
          ownerWallet: guildData.ownerWallet,
        })
      }, 1000)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Server Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter server title" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of your Discord server.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Server Icon URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/icon.png" {...field} />
              </FormControl>
              <FormDescription>
                Provide a URL for your server's icon image.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief description of your server"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A short description of your server (max 200 characters).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detailed Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Detailed description of your server"
                  className="resize-vertical"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A more detailed description of your server (max 1000 characters).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ownerWallet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner Wallet</FormLabel>
              <FormControl>
                <Input placeholder="Enter owner wallet address" {...field} />
              </FormControl>
              <FormDescription>
                The wallet address of the server owner.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Add role selection fields here if needed */}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}

export default ServerFormSubmit

