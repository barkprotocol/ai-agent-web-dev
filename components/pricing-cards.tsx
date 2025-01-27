"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Basic",
    description: "Essential AI-powered trading tools",
    price: { monthly: 29, annual: 290 },
    features: ["AI market analysis", "Basic trading signals", "Daily market reports"],
  },
  {
    name: "Pro",
    description: "Advanced features for serious traders",
    price: { monthly: 79, annual: 790 },
    features: ["All Basic features", "Advanced AI predictions", "Real-time alerts", "Priority support"],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large-scale operations",
    price: { monthly: "Custom", annual: "Custom" },
    features: ["All Pro features", "Custom AI models", "Dedicated account manager", "API access"],
  },
]

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center space-x-4">
        <span className={`text-sm ${!isAnnual ? "font-bold" : ""}`}>Monthly</span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className={`text-sm ${isAnnual ? "font-bold" : ""}`}>Annual (Save 20%)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-4">
                {typeof plan.price[isAnnual ? "annual" : "monthly"] === "number"
                  ? `$${plan.price[isAnnual ? "annual" : "monthly"]}`
                  : plan.price[isAnnual ? "annual" : "monthly"]}
                {typeof plan.price[isAnnual ? "annual" : "monthly"] === "number" && (
                  <span className="text-sm font-normal">/{isAnnual ? "year" : "month"}</span>
                )}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

