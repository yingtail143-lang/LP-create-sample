import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/data/pricing";

/** 「料金」セクション：比較検討の後押し。各プランにCTAを配置 */
export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="PRICE"
          title="料金プラン"
          description="ライフスタイルや目標に合わせて選べる3つのプラン。まずは無料カウンセリングで、ご自身に合ったプランをご相談ください。"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col gap-6 ${
                plan.highlighted
                  ? "border-2 border-orange-500 shadow-lg md:-translate-y-2"
                  : ""
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              )}

              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500">{plan.tagline}</p>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <span className="text-3xl font-bold text-slate-900">
                  ¥{plan.price}
                </span>
                <span className="text-xs text-slate-500">
                  {plan.priceUnit}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span aria-hidden className="mt-0.5 text-orange-500">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href="#contact" className="mt-auto w-full">
                このプランで相談する
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
