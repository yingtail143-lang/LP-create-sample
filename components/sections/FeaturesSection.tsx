import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/features";

/** 「サービスの特徴」セクション：差別化ポイントの訴求＋末尾に軽CTA */
export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="SERVICE"
          title="選ばれる4つの理由"
          description="忙しい会社員でも無理なく続けられ、確実に結果につながる仕組みを用意しています。"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={feature.title} className="flex gap-4">
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-700 text-sm font-bold text-white"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="#contact" size="lg">
            無料カウンセリングを予約する
          </Button>
        </div>
      </div>
    </section>
  );
}
