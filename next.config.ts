import { config } from 'process';
import { Options } from './node_modules/cosmiconfig/dist/types.d';
import { Config } from './node_modules/tailwind-merge/src/lib/types';
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;