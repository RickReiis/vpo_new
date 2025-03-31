// next.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPlugins = require('next-compose-plugins');


const nextConfig = {
  images: {
    domains: [
      // 'https://oqhmcfazmpmadpxubmwx.supabase.co',
      'localhost'
    ]
  }
};

module.exports = withPlugins([nextConfig]);