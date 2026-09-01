"use client";

import { useActionState } from "react";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import { submitContactForm } from "./actions";
import { initialContactFormState } from "./contactFormState";

/** お問い合わせフォーム本体。バリデーションと送信はServer Action側で行う */
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {/* ハニーポット：人間には非表示。botのみ入力してしまう */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">会社名</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <FormField
        label="お名前"
        name="name"
        required
        defaultValue={state.values?.name}
        errors={state.errors?.name}
      />
      <FormField
        label="電話番号"
        name="phone"
        type="tel"
        required
        placeholder="例：09012345678"
        defaultValue={state.values?.phone}
        errors={state.errors?.phone}
      />
      <FormField
        label="メールアドレス"
        name="email"
        type="email"
        required
        defaultValue={state.values?.email}
        errors={state.errors?.email}
      />
      <FormField
        label="希望日時（第一希望）"
        name="preferredDate"
        placeholder="例：平日夜、土曜午前 など"
        defaultValue={state.values?.preferredDate}
        errors={state.errors?.preferredDate}
      />
      <FormField
        label="ご相談内容・備考"
        name="message"
        multiline
        defaultValue={state.values?.message}
        errors={state.errors?.message}
      />

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? "送信中…" : "無料カウンセリングに申し込む"}
      </Button>

      <p className="text-center text-xs text-slate-500">
        送信いただいた内容は、カウンセリングのご案内以外の目的では使用しません。
      </p>
    </form>
  );
}
