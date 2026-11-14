import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // "Publicar la app" became the help article, the one the panel links to
  async redirects() {
    return [
      { source: "/guia/publicar", destination: "/ayuda/publicar-tu-app", permanent: true },
      { source: "/es/guia/publicar", destination: "/ayuda/publicar-tu-app", permanent: true },
      { source: "/pt/guia/publicar", destination: "/pt/ayuda/publicar-tu-app", permanent: true },
    ];
  },
};

export default nextConfig;
