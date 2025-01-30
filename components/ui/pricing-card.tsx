import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingTier {
  title: string
  description: string
  price: string
  currency: string
  features: string[]
  ctaText: string
  onCtaClick: () => void
}

interface PricingCardProps {
  tiers: PricingTier[]
}

export function PricingCard({ tiers }: PricingCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{tier.title}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-xl ml-1">{tier.currency}</span>
            </div>
            <ul className="space-y-2">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={tier.onCtaClick}>
              {tier.ctaText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

