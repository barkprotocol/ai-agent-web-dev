"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface LogoProps {
  isScrolled: boolean
}

export function Logo({ isScrolled }: LogoProps) {
  const { resolvedTheme } = useTheme()

  const subTextColor = isScrolled ? "text-gray-400" : resolvedTheme === "dark" ? "text-gray-100" : "text-gray-500"

  return (
    <Link
      href="/"
      className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 rounded-md"
      aria-label="BARK AI Agent Homepage"
    >
      <div className="relative w-10 h-10">
        <Image
          src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
          alt="BARK Protocol Logo - Stylized bulldog face"
          fill
          sizes="40px"
          className="rounded-full object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className={cn("font-bold text-xl leading-none text-gray-200")}>BARK</span>
        <span className={cn(`font-bold text-[0.65rem] mt-0.5 ${subTextColor} tracking-widest`)}>AI AGENT</span>
      </div>
    </Link>
  )
}

