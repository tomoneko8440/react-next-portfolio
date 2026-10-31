/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH,
  trailingSlash: true,
  // 静的書き出しでは画像最適化サーバーを使えない
  images: { unoptimized: true },
};

export default nextConfig;
