import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ホームディレクトリ側に別の package-lock.json があり、ワークスペースルートが
  // 誤検出されるため明示的にこのプロジェクトのルートを指定する。
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
