export type Testimonial = {
  name: string;
  attribute: string;
  quote: string;
  result?: string;
};

/**
 * 利用者の声（プレースホルダー）。
 * 公開前に、実際の会員から許諾を得た本物の声へ必ず差し替えること。
 * 架空の体験談を実際の口コミとして掲載すると景品表示法（ステルスマーケティング規制）
 * に抵触するおそれがある。
 */
export const testimonials: Testimonial[] = [
  {
    name: "K.Sさん",
    attribute: "42歳・会社員",
    quote:
      "在宅勤務が増えて運動不足を実感していましたが、無理のないメニューのおかげで3ヶ月で体重が変わりました。仕事のパフォーマンスも上がった気がします。",
    result: "3ヶ月で -5kg",
  },
  {
    name: "M.Tさん",
    attribute: "38歳・会社員",
    quote:
      "一人だと絶対続かないタイプでしたが、トレーナーさんが毎回励ましてくれるので楽しく通えています。",
  },
  {
    name: "Y.Hさん",
    attribute: "47歳・会社員",
    quote:
      "食事のアドバイスが具体的で、無理な我慢をせずに体脂肪率を落とすことができました。",
    result: "体脂肪率 -10%",
  },
];
