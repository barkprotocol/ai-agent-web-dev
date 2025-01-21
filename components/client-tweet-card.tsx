import React from "react"

interface TweetData {
  id: string
  text: string
  author: {
    name: string
    username: string
    profile_image_url: string
  }
  created_at: string
  // Add more fields as needed
}

interface TweetProps {
  id: string
  apiUrl: string
  fallback?: React.ReactNode
  components?: {
    TweetNotFound?: React.ComponentType<{ error?: Error }>
  }
  fetchOptions?: RequestInit
  onError?: (error: Error) => React.ReactNode
  className?: string
}

const TweetSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
    <div className="mt-4 h-4 w-3/4 rounded bg-gray-200"></div>
    <div className="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>
  </div>
)

const TweetNotFound: React.FC<{ error?: Error }> = ({ error }) => (
  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
    <p className="font-semibold">Error: {error?.message || "Tweet not found"}</p>
  </div>
)

export const ClientTweetCard: React.FC<TweetProps> = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  className,
  ...props
}) => {
  const [data, setData] = React.useState<TweetData | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(apiUrl, fetchOptions)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const json: TweetData = await response.json()
        setData(json)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [apiUrl, fetchOptions])

  const NotFound = React.useMemo(() => components?.TweetNotFound || TweetNotFound, [components?.TweetNotFound])

  if (isLoading) return fallback

  if (error || !data) {
    return <NotFound error={error || new Error("Tweet data not found")} />
  }

  return <MagicTweet tweet={data} className={className} {...props} />
}

interface MagicTweetProps {
  tweet: TweetData
  className?: string
}

const MagicTweet: React.FC<MagicTweetProps> = ({ tweet, className }) => (
  <div className={`rounded-lg border border-gray-200 p-4 ${className || ""}`}>
    <div className="flex items-center">
      <img
        src={tweet.author.profile_image_url || "/placeholder.svg"}
        alt={tweet.author.name}
        className="h-12 w-12 rounded-full"
      />
      <div className="ml-4">
        <h2 className="font-bold">{tweet.author.name}</h2>
        <p className="text-gray-500">@{tweet.author.username}</p>
      </div>
    </div>
    <p className="mt-4">{tweet.text}</p>
    <p className="mt-2 text-sm text-gray-500">{new Date(tweet.created_at).toLocaleString()}</p>
  </div>
)

