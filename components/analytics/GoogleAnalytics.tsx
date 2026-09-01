import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * GA4のgtag.jsを読み込む。
 *
 * 計測ID未設定時は何も描画しない。next/script は Server Component から
 * 使用可能なため、これ自体はクライアントバンドルを増やさない
 * （Scriptタグの実行のみクライアント側で行われる）。読み込み戦略は
 * afterInteractive とし、初期表示（LCP等）の速度を優先する。
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
