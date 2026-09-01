import { z } from "zod";

/** お問い合わせフォームのバリデーションスキーマ */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "お名前を入力してください")
    .max(50, "50文字以内で入力してください"),
  phone: z
    .string()
    .trim()
    .min(1, "電話番号を入力してください")
    .regex(/^[0-9-]{10,13}$/, "正しい電話番号を入力してください（例：09012345678）"),
  email: z
    .string()
    .trim()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスを入力してください"),
  preferredDate: z
    .string()
    .trim()
    .max(100, "100文字以内で入力してください")
    .optional(),
  message: z
    .string()
    .trim()
    .max(500, "500文字以内で入力してください")
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/** Server Action (submitContactForm) の状態。useActionState と共に使用する */
export type ContactFormState = {
  status: "idle" | "error";
  errors?: Record<string, string[]>;
  values?: Record<string, string>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
