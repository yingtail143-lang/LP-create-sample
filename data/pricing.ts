export type PricingPlan = {
  name: string;
  price: string;
  priceUnit: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

/**
 * 料金プラン（プレースホルダー）。
 * 公開前に実際の料金・回数・内容へ差し替えること。
 */
export const pricingPlans: PricingPlan[] = [
  {
    name: "ライトプラン",
    price: "19,800",
    priceUnit: "円 / 月（税込）",
    tagline: "まずは気軽に始めたい方に",
    features: [
      "月4回（週1回）のマンツーマン指導",
      "トレーニングウェア・シューズ無料レンタル",
      "水素水飲み放題",
    ],
  },
  {
    name: "スタンダードプラン",
    price: "34,800",
    priceUnit: "円 / 月（税込）",
    tagline: "効率よく結果を出したい方に",
    features: [
      "月8回（週2回）のマンツーマン指導",
      "食事アドバイス（LINEサポート）",
      "体組成計での定期計測",
      "トレーニングウェア・シューズ無料レンタル",
    ],
    highlighted: true,
    badge: "人気No.1",
  },
  {
    name: "プレミアムプラン",
    price: "48,800",
    priceUnit: "円 / 月（税込）",
    tagline: "短期集中で確実に結果を出したい方に",
    features: [
      "月12回（週3回）のマンツーマン指導",
      "毎日の食事管理・LINEサポート",
      "体組成計での定期計測",
      "優先予約枠",
      "トレーニングウェア・シューズ無料レンタル",
    ],
  },
];
