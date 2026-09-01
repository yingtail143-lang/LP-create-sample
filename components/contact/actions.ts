"use server";

import { redirect } from "next/navigation";
import type { ContactFormState } from "./contactFormState";
import { contactSchema } from "./contactSchema";

/**
 * お問い合わせフォームの送信処理（Server Action）。
 *
 * TODO: 現状はバリデーション後にサーバーログへ出力するのみで、実際の通知先
 * （メール配信サービス／CRM等）とは未連携。本番公開前に、送信先サービスを
 * 決めた上でここに連携処理を実装すること。
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // ハニーポット：人間には見えない項目が埋まっていればbotとみなし、
  // 正常系と同様に完了ページへ送って弾いていることを悟らせない。
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    redirect("/thanks");
  }

  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    preferredDate: formData.get("preferredDate"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      values: Object.fromEntries(
        Object.entries(raw).map(([key, value]) => [
          key,
          typeof value === "string" ? value : "",
        ]),
      ),
    };
  }

  // TODO: ここで実際の送信（メール通知・CRM登録等）を行う。
  console.log("[contact] 新規お問い合わせを受け付けました:", parsed.data);

  redirect("/thanks");
}
