/**
 * サイト全体で共有するSEO関連の定数・構造化データ。
 *
 * SITE_URL は本番ドメインが決まるまでのプレースホルダー。
 * 実際にデプロイする際は環境変数 NEXT_PUBLIC_SITE_URL に実ドメインを設定するか、
 * このデフォルト値自体を差し替えること。
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const SITE_NAME = "PERSONAL GYM";

export const SITE_TITLE = "無料カウンセリング受付中 | パーソナルジム";

export const SITE_DESCRIPTION =
  "30〜50代の会社員向けパーソナルジム。専属トレーナーによるオーダーメイドのトレーニングで、忙しくても続けられるダイエット・運動不足解消をサポートします。まずは無料カウンセリングへ。";

/**
 * LocalBusiness系の構造化データ（JSON-LD）。
 * telephone / address は全てプレースホルダー（"◯◯"表記）。
 * 実店舗の情報が確定するまでは公開しない、または確定次第 必ず実際の値に
 * 差し替えること。
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "00-0000-0000",
  priceRange: "¥¥",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "◯◯都道府県",
    addressLocality: "◯◯市区町村",
    streetAddress: "◯◯ 1-2-3",
  },
} as const;
