const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'api.telegram.org',
      },
      {
        protocol: 'https',
        hostname: 'openai.com', // For OpenAI / ChatGPT assets if needed
      },
    ],
  },
  webpack: (config: { module: { rules: { test: RegExp; type: string; }[]; }; stats: string; ignoreWarnings: RegExp[]; resolve: { fallback: { fs: boolean; module: boolean; }; }; }, { isServer }: any) => {
    // Add rule for handling JSON files
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });

    // Allow build to continue even with errors or warnings
    config.stats = 'errors-only'; // Shows only errors (suppresses warnings)

    // Ignore specific warnings that are non-blocking
    config.ignoreWarnings = [
      /Failed to parse source map/,
      /Module not found/,
      /Some dependencies are not being included/,
    ];

    // Prevent errors related to missing Node.js modules in the browser
    config.resolve.fallback = {
      fs: false,
      module: false,
    };

    return config;
  },
  // Optionally, suppress TypeScript or other errors if needed
  typescript: {
    ignoreBuildErrors: true, // Allows TypeScript errors to not block the build
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores eslint errors during the build
  },
  env: {
    DISCORD_API_URL: process.env.DISCORD_API_URL, // Your Discord API or Bot URL
    TELEGRAM_API_URL: process.env.TELEGRAM_API_URL, // Your Telegram API URL
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // API key for ChatGPT
  },
};

export default nextConfig;
