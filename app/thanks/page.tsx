import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "お申し込みありがとうございます | パーソナルジム",
  robots: { index: false, follow: false },
};

/** フォーム送信完了ページ（コンバージョン計測用にトップと分離） */
export default function ThanksPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-slate-50 px-6 py-24 text-center">
      <span className="text-sm font-bold tracking-widest text-orange-700">
        THANK YOU
      </span>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        お申し込みありがとうございます
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        無料カウンセリングのお申し込みを受け付けました。担当者より1〜2営業日以内にご連絡いたしますので、今しばらくお待ちください。
      </p>
      <Button href="/">トップページへ戻る</Button>
    </main>
  );
}
