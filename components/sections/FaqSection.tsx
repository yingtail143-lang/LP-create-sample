import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

/** 「FAQ」セクション：不安要素の解消による離脱防止。末尾にCTAを配置 */
export default function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          description="ご不安な点は、無料カウンセリングでもお気軽にご相談いただけます。"
        />

        <Accordion items={faqs} />

        <div className="flex justify-center">
          <Button href="#contact" size="lg">
            無料カウンセリングを予約する
          </Button>
        </div>
      </div>
    </section>
  );
}
