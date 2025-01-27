/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(220, 13%, 18%)",
          foreground: "hsl({
  "name": "bark-ai-agent-website",
  "description": "BARK AI Agent is an advanced AI-driven platform that empowers users by streamlining charitable incentives and enhancing trading experiences on the Solana blockchain.",
  "version": "0.1.0",
  "author": "BARK Protocol",
  "license": "MIT",
  "private": true,
  "scripts": {
    "vercel-build": "NODE_OPTIONS=--max_old_space_size=2048 pnpm npx prisma generate && next build",
    "dev": "NODE_NO_WARNINGS=1 next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:reset": "pnpm npx prisma generate && pnpm npx prisma migrate reset && pnpm npx prisma db push",
    "generate": "prisma generate",
    "migrate": "prisma migrate deploy",
    "dev:up-build": "docker compose up --build -d",
    "dev:up": "docker compose up -d",
    "format": "prettier --write \"**/*.{ts,tsx,md,json,js,jsx}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,md,json,js,jsx}\""
  },
  "dependencies": {
    "@ai-sdk/anthropic": "^1.1.4",
    "@ai-sdk/openai": "^1.1.4",
    "@emotion/react": "^11.14.0",
    "@hookform/resolvers": "^3.10.0",
    "@mem0/vercel-ai-provider": "^0.0.10",
    "@prisma/client": "^6.2.1",
    "@privy-io/react-auth": "^1.99.1",
    "@privy-io/server-auth": "^1.18.3",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.5",
    "@radix-ui/react-aspect-ratio": "^1.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-collapsible": "^1.1.2",
    "@radix-ui/react-context-menu": "^2.2.5",
    "@radix-ui/react-dialog": "^1.1.5",
    "@radix-ui/react-dropdown-menu": "^2.1.5",
    "@radix-ui/react-hover-card": "^1.1.5",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-menubar": "^1.1.5",
    "@radix-ui/react-navigation-menu": "^1.2.4",
    "@radix-ui/react-popover": "^1.1.5",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-scroll-area": "^1.2.2",
    "@radix-ui/react-select": "^2.1.5",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.5",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-toggle-group": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.7",
    "@solana/wallet-adapter-base": "^0.9.23",
    "@solana/wallet-adapter-react": "^0.15.35",
    "@solana/wallet-adapter-react-ui": "^0.9.35",
    "@solana/wallet-adapter-wallets": "^0.19.32",
    "@solana/web3.js": "^1.98.0",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.48.1",
    "@tailwindcss/postcss": "^4.0.0",
    "@vercel/analytics": "^1.4.1",
    "@vercel/speed-insights": "^1.1.0",
    "ai": "^4.1.8",
    "axios": "^1.7.9",
    "bs58": "^6.0.0",
    "class-variance-authority": "^0.7.1",
    "classnames": "^2.5.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.4",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.5.2",
    "framer-motion": "^12.0.6",
    "helius-sdk": "^1.4.1",
    "input-otp": "^1.4.2",
    "lodash": "^4.17.21",
    "lucide-react": "^0.474.0",
    "mem0ai": "^1.0.32",
    "moment": "^2.30.1",
    "next": "^15.1.6",
    "next-safe-action": "^7.10.2",
    "next-themes": "^0.4.4",
    "node-fetch": "^3.3.2",
    "nodemailer": "^6.10.0",
    "postcss": "^8.5.1",
    "react": "^19.0.0",
    "react-day-picker": "^9.5.1",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.0",
    "sonner": "^1.7.2",
    "swr": "^2.3.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss": "^3.4.17",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.0.5",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@trivago/prettier-plugin-sort-imports": "^5.2.1",
    "@types/node": "^22.10.10",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "autoprefixer": "10.4.20",
    "eslint": "^9.19.0",
    "eslint-config-next": "^15.1.6",
    "postcss": "^8.4.21",
    "prisma": "^6.2.1",
    "tailwindcss": "^4.0.0",
    "tsx": "^4.19.2",
    "typescript": "^5.7.3"
  },
  "packageManager": "pnpm@9.15.4"
})",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      darkMode: {
        primary: {
          DEFAULT: "hsl(220, 13%, 12%)",
          foreground: "#f9f8f7",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

