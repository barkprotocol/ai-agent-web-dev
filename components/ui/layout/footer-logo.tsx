"use client"

import Image from "next/image"
import Link from "next/link"

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group" aria-label="BARK AI Agent Homepage">
      <div className="relative w-12 h-12">
        <Image
          src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
          alt="BARK AI Agent Logo"
          fill
          sizes="(max-width: 768px) 48px, 48px"
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-white text-xl leading-none">BARK</span>
        <span className="font-medium text-white/80 text-xs mt-0.5">AI Agent</span>
      </div>
    </Link>
  )
}

