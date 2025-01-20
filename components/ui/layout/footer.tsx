"use client"

import Link from "next/link"
import { useState, useCallback } from "react"
import type React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FooterLogo } from "./footer-logo"

// Define types for the social link icons
type SvgProps = React.SVGProps<SVGSVGElement>

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const description =
    "Empower your financial journey with BARK Protocol, the groundbreaking fusion of Solana blockchain and AI technologies."

  const socialLinks = [
    {
      name: "Discord",
      href: "https://www.discord.gg",
      icon: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://www.x.com/bark_protocol",
      icon: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bark.protocol",
      icon: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://www.github.com/barkprotocol/",
      icon: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://www.t.me/bark_protocol",
      icon: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: "Medium",
      href: "https://medium.com/@bark.protocol",
      icon: (props: SvgProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ]

  const footerSections = [
    {
      title: "Products",
      items: [
        { name: "AI Agents", href: "/agents" },
        { name: "Dashboard", href: "/home" },
        { name: "Bot", href: "/bot" },
        { name: "AI Marketplace", href: "/marketplace" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { name: "Analytics", href: "/analytics" },
        { name: "DeFAI", href: "/defi" },
        { name: "Payments", href: "/payments" },
        { name: "Mint", href: "/mint" },
      ],
    },
    {
      title: "References",
      items: [
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
        { name: "API", href: "/api" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "/pages/privacy-policy" },
        { name: "Terms of Service", href: "/pages/terms-of-service" },
        { name: "Cookies", href: "/pages/cookies" },
      ],
    },
  ]

  const toggleSection = useCallback((title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title))
  }, [])

  return (
    <footer className="bg-black text-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <FooterLogo />
            <p className="text-gray-400 text-base max-w-xs">{description}</p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-100 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.name} page`}
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
                    <button
                      className="flex items-center justify-between w-full text-left md:cursor-default"
                      onClick={() => toggleSection(section.title)}
                      aria-expanded={expandedSection === section.title}
                      aria-controls={`footer-section-${section.title}`}
                    >
                      {section.title}
                      <span className="md:hidden">
                        {expandedSection === section.title ? (
                          <ChevronUp className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <ul
                    id={`footer-section-${section.title}`}
                    className={`space-y-4 ${expandedSection === section.title ? "block" : "hidden md:block"}`}
                    role="list"
                  >
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(2).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">
                    <button
                      className="flex items-center justify-between w-full text-left md:cursor-default"
                      onClick={() => toggleSection(section.title)}
                      aria-expanded={expandedSection === section.title}
                      aria-controls={`footer-section-${section.title}`}
                    >
                      {section.title}
                      <span className="md:hidden">
                        {expandedSection === section.title ? (
                          <ChevronUp className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <ul
                    id={`footer-section-${section.title}`}
                    className={`space-y-4 ${expandedSection === section.title ? "block" : "hidden md:block"}`}
                    role="list"
                  >
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

