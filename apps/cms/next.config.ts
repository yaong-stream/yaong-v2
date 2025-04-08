import {
  WithNxOptions,
} from "@nx/next/plugins/with-nx";
import {
  composePlugins,
  withNx,
} from "@nx/next";

const nextConfig: WithNxOptions = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-yaong.narumir.io',
        port: '',
        pathname: '/**',
        search: '',
      }
    ],
  },
  nx: {
    svgr: false,
  },
};
const plugins = [
  withNx,
];

export default composePlugins(...plugins)(nextConfig);;
