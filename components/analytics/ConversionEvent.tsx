"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * サンクスページ（/thanks）表示時にGA4へコンバージョンイベントを送信する。
 *
 * "generate_lead" はGA4の推奨イベント名（フォーム等によるリード獲得）。
 * GA4管理画面でこのイベントを「コンバージョンとしてマーク」することで、
 * Google広告等のコンバージョン計測にもそのまま連携できる。
 *
 * 画面には何も描画しないためClient Componentをこのファイルのみに限定し、
 * /thanks 自体はServer Componentのまま維持している。
 */
export default function ConversionEvent() {
  useEffect(() => {
    trackEvent("generate_lead", {
      event_category: "contact_form",
    });
  }, []);

  return null;
}
