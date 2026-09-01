import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

/** 「お問い合わせ」セクション：コンバージョン本体のフォーム */
export default function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-10">
        <SectionHeading
          eyebrow="CONTACT"
          title="無料カウンセリングのお申し込み"
          description="下記フォームより必要事項をご入力ください。担当者より1〜2営業日以内にご連絡いたします。"
        />
        <ContactForm />
      </div>
    </section>
  );
}
