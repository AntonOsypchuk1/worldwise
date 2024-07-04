/** @type {import('next').NextConfig} */
module.exports = {
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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
