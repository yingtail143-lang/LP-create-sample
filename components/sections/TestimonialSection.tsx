import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

/** 「利用者の声」セクション：社会的証明。CTAは置かない */
export default function TestimonialSection() {
  return (
    <section id="voice" className="bg-slate-900 px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="VOICE"
          title="利用者の声"
          description="実際にご利用いただいている会員様から届いた声の一部をご紹介します。"
          tone="dark"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col gap-4">
              {testimonial.result && (
                <span className="self-start rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800">
                  {testimonial.result}
                </span>
              )}

              <p className="text-sm leading-relaxed text-slate-700">
                “{testimonial.quote}”
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white"
                >
                  {testimonial.name.at(0)}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {testimonial.attribute}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
