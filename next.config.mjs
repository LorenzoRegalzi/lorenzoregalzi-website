/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // oppure altre opzioni che già utilizzi
    images: {
        domains: ['media2.dev.to'], // Add other hostnames here if needed
      },
    // Configurazione per il polling in modalità sviluppo
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,            // Intervallo di polling in millisecondi
        aggregateTimeout: 300, // Timeout di aggregazione delle modifiche
      }
      return config
    },
};

export default nextConfig;
