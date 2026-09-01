/**
 * Server Action (submitContactForm) の状態。useActionState と共に使用する。
 *
 * zodスキーマ（contactSchema.ts）とは別ファイルに分離している。
 * ContactForm.tsx（Client Component）はこの型・定数のみを必要とするが、
 * 同じファイルにzodスキーマを同居させるとバリデーションライブラリ全体が
 * クライアントバンドルに含まれてしまうため（実測: gzip 87KB）、
 * zodに依存しないこのファイルを経由させることでクライアントから切り離す。
 */
export type ContactFormState = {
  status: "idle" | "error";
  errors?: Record<string, string[]>;
  values?: Record<string, string>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
