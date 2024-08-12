/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aeronet.gsfc.nasa.gov",
        port: "",
        pathname: "/cgi-bin/draw_data_chart_v3/**",
      },
    ],
  },
};

export default nextConfig;
