import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { trainers } from "@/data/trainers";

/**
 * 「トレーナー紹介」セクション：信頼・安心感の醸成。CTAは置かない。
 * 写真は未用意のため、ブランドカラーのイニシャルアバターをプレースホルダーとして使用。
 * 実写に差し替える際は avatar の div を next/image に置き換える。
 */
export default function TrainerSection() {
  return (
    <section id="trainers" className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="TRAINER"
          title="あなたを支えるトレーナー"
          description="資格を持つ専属トレーナーが、二人三脚でゴールまで伴走します。"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {trainers.map((trainer) => (
            <Card
              key={trainer.name}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span
                aria-hidden
                className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white"
              >
                {trainer.name.at(0)}
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {trainer.name}
                </h3>
                <span className="text-sm font-medium text-orange-700">
                  {trainer.role}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {trainer.bio}
              </p>

              <p className="border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-500 italic">
                “{trainer.comment}”
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
