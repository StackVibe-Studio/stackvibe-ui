/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: [
    '@stackvibe-studio/ui',
    '@stackvibe-studio/motion',
    '@stackvibe-studio/three',
  ],
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/stackvibe-ui' : undefined,
  assetPrefix: isGithubPages ? '/stackvibe-ui/' : undefined,
};

export default nextConfig;
