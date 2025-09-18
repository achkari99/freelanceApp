import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  experimental: {
    optimizePackageImports: ["lucide-react"],
    mdxRs: true
  },
  transpilePackages: ["framer-motion"],
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ],
    unoptimized: true
  }
};

export default withMDX(nextConfig);
