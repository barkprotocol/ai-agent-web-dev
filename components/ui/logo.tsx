"use client"

import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import { useTheme } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

interface LogoProps {
  isScrolled: boolean
}

export function Logo({ isScrolled }: LogoProps) {
  const { resolvedTheme } = useTheme()

  const subTextColor = isScrolled
    ? "text-muted-foreground"
    : resolvedTheme === "dark"
      ? "text-white/80"
      : "text-muted-foreground"

  return (
    <Link
      href="/"
      className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
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
      <div className="flex flex-col justify-center">
        <span className={`${inter.className} font-bold text-xl leading-none text-[#DBCFC7]`}>BARK</span>
        <span className={`${inter.className} font-bold text-xs mt-0.5 ${subTextColor}`}>AI Agent</span>
      </div>
    </Link>
  )
}

