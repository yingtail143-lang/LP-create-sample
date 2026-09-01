import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OGP画像用に日本語グリフを含むフォントを取得する。
 *
 * next/font/google はCJK(japanese)サブセットを提供しないため使えない
 * （詳細はCLAUDE.md参照）。ImageResponseはnext/fontを経由せず任意の
 * フォントバイナリを直接渡せるため、Google Fonts CSS APIから実際に
 * 日本語グリフを含むTTFファイルを取得して埋め込む。
 */
async function loadNotoSansJP(weight: 400 | 700): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((res) => res.text());

  const fontUrl = css.match(/url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
  if (!fontUrl) {
    throw new Error("Noto Sans JP のフォントURL取得に失敗しました");
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [regular, bold] = await Promise.all([
    loadNotoSansJP(400),
    loadNotoSansJP(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #1e293b 55%, #334155 100%)",
          fontFamily: "Noto Sans JP",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#fdba74",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 60,
            fontWeight: 700,
            marginTop: 28,
            lineHeight: 1.3,
            color: "#ffffff",
          }}
        >
          <span>忙しいあなたの体を、</span>
          <span>結果の出るトレーニングで変える。</span>
        </div>
        <div style={{ fontSize: 30, marginTop: 32, color: "#cbd5e1" }}>
          無料カウンセリング受付中
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans JP", data: regular, weight: 400, style: "normal" },
        { name: "Noto Sans JP", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
