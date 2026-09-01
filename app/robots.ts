import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // /thanks は robots.txt では disallow しない。既に metadata の
    // robots:{index:false} でnoindex指定済みのため、ここでクロール自体を
    // 禁止すると検索エンジンがnoindexタグを読めず、URLだけインデックスに
    // 残ってしまう恐れがある（noindexとdisallowの併用は非推奨）。
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
