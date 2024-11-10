import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This allows us to handle next-example, the same way we do standard apps, in CI
  distDir: 'dist',
  // Prevent react-router from resolving in order to use Next's router instead.
  // Normally users will not need to do this, as they will not have react-router installed.
  webpack: (config, _options) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.NormalModuleReplacementPlugin(/^react-helmet-async$/, '@not-govuk\/VOID-react-helmet-async'),
      new webpack.NormalModuleReplacementPlugin(/^react-router$/, '@not-govuk\/VOID-react-router'),
      new webpack.NormalModuleReplacementPlugin(/^react-router-dom$/, '@not-govuk\/VOID-react-router-dom'),
    ]
  })
};

export default nextConfig;
