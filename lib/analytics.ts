/**
 * GA4（Google アナリティクス）計測用の定数・ヘルパー。
 *
 * 環境変数 NEXT_PUBLIC_GA_MEASUREMENT_ID が未設定の場合、計測タグ自体を
 * 描画しない（開発環境や実IDが決まっていない段階でダミーIDを送信しない
 * ため）。実際に計測を有効化する場合は、GA4管理画面で発行される
 * 「G-XXXXXXXXXX」形式の測定IDをVercelの環境変数に設定すること。
 * NEXT_PUBLIC_* はビルド時に値が埋め込まれるため、設定後は再デプロイが必要。
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * GA4へカスタムイベントを送信する。
 *
 * window.gtag の存在チェックには依存しない。GoogleAnalytics
 * コンポーネントの afterInteractive スクリプトと、このイベントを呼ぶ側
 * （例: ConversionEvent）の useEffect はどちらも「hydration後」に実行され
 * るだけで実行順序の保証がなく、実測でも gtag 未定義のまま呼ばれてイベン
 * トが握り潰されるケースがあった。gtag() 自体の中身が
 * `dataLayer.push(arguments)` であることを踏まえ、ここでも dataLayer に
 * 直接pushする（未生成なら生成する）ことで、gtag.js の読み込み・初期化が
 * まだ終わっていなくても取りこぼさないようにしている
 * （Googleが公式に案内している dataLayer への直接push方式）。
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", eventName, params]);
}
