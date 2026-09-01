import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// 1ページ完結のLPのため、掲載するのはトップページのみ
// （/thanks はコンバージョン確認用ページでnoindexのため含めない）
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
