import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { problems } from "@/data/problems";

/** 「悩み」セクション：ターゲット層への共感喚起。CTAは置かず次セクションへの導線のみ */
export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="WORRY"
          title="こんなお悩み、ありませんか？"
          description="30〜50代の働き盛りだからこそ抱えやすい、体と時間の悩み。一つでも当てはまったら、それはあなただけではありません。"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.title} className="flex gap-4">
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-600"
              >
                !
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
