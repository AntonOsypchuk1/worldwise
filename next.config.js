/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cities",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
