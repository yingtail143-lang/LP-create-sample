import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "無料カウンセリング受付中 | パーソナルジム",
  description:
    "30〜50代の会社員向けパーソナルジム。専属トレーナーによるオーダーメイドのトレーニングで、忙しくても続けられるダイエット・運動不足解消をサポートします。まずは無料カウンセリングへ。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
