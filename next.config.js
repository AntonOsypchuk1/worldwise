/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: "/cities",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
