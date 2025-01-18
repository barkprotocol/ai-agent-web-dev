import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md" 
      aria-label="BARK AI Agent Homepage"
    >
      <div className="relative w-10 h-10">
        <Image
          src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
          alt="BARK AI Agent Logo"
          fill
          sizes="(max-width: 768px) 40px, 40px"
          className="rounded-full object-cover"
          priority
        />
      </div>
      <span className="text-xl text-foreground/80">
        <span className="font-bold text-primary">BARK</span>
        <span className="font-medium text-primary/80"> AI Agent</span>
      </span>
    </Link>
  )
}


