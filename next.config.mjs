import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const normalizedBasePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, '')}` : '';
const assetPrefix = normalizedBasePath || undefined;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: normalizedBasePath || undefined,
  assetPrefix,
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
