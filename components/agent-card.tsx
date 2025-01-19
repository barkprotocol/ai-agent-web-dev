import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface AgentCardProps {
  title: string
  description: string
  icon: React.ReactNode
  imageUrl: string
  features: string[]
  url: string
}

export function AgentCard({ title, description, icon, imageUrl, features, url }: AgentCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative h-40 w-full mb-4">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} illustration`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm">{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={url}>Try {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

