const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
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
};

export default nextConfig;
