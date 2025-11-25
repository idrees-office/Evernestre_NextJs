import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [
      "test_backend.leadshub.ae",
      "i.pravatar.cc",
      "evernest.ae",
      "127.0.0.1",
      "localhost",
      "images.pexels.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test_backend.leadshub.ae",
        port: "",
        pathname: "/media/**",
      },
       {
        protocol: "https",
        hostname: "backend.evernest.ae",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.evernest.ae",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
