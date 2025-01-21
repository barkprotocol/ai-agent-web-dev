import type React from "react"
import { ExternalLink } from "lucide-react"

interface ExternalLatestLinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

export const ExternalLatestLink: React.FC<ExternalLatestLinkProps> = ({
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
      <circle cx="19" cy="5" r="2" fill={color} />
    </svg>
  )
}

