import Button from "@/components/ui/Button";

/**
 * ファーストビュー（Hero）セクション。
 * - LCP対策のため背景は画像ではなくCSSグラデーションで構成（実写を用意でき次第 next/image に差し替え）
 * - CTAは1画面内に必ず収まるよう配置
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-6 py-28 text-white sm:px-10"
    >
      {/* 背景装飾（装飾のみのためスクリーンリーダーからは除外） */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-orange-500/25 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <p className="rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-1 text-sm font-medium text-orange-300">
          30〜50代の会社員のためのパーソナルジム
        </p>

        <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
          忙しいあなたの体を、
          <br />
          結果の出るトレーニングで変える。
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          運動不足・ダイエットに悩む会社員のためのパーソナルジム。専属トレーナーがあなたの生活リズムに合わせたプランをご提案します。まずは無料カウンセリングでお気軽にご相談ください。
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <Button href="#contact" size="lg">
            無料カウンセリングを予約する
          </Button>
          <span className="text-sm text-slate-400">
            所要時間 約30分・完全無料
          </span>
        </div>
      </div>
    </section>
  );
}
