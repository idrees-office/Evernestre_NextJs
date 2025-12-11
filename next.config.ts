import type { NextConfig } from "next";

const nextConfig = {

  devIndicators: false,
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test_backend.leadshub.ae",
        port: "",
        pathname: "/media/**",
      },

      {
        protocol: "https",
        hostname: "backend.leadshub.ae",
        port: "",
        pathname: "/media/**",
      },

      {
        protocol: "https",
        hostname: "backend.evernest.ae",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
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
      {
        protocol: "https",
        hostname: "evernest.ae",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh7.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh8.googleusercontent.com",
        port: "",
        pathname: "/**",
      },

    ],
  },
};

export default nextConfig;