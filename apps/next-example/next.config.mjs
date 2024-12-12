import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This allows us to handle next-example, the same way we do standard apps, in CI
  distDir: 'dist',
  webpack: (config, _options) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.NormalModuleReplacementPlugin(/^@not-govuk\/head$/, '@not-govuk\/head\/dummy'),    // ADD THIS LINE
      new webpack.NormalModuleReplacementPlugin(/^@not-govuk\/router$/, '@not-govuk\/router\/next'), // ADD THIS LINE
    ]
  })
};

export default nextConfig;
