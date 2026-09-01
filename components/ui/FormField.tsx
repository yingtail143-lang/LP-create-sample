type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  errors?: string[];
  multiline?: boolean;
};

/** input / textarea とバリデーションエラー表示の共通レイアウト */
export default function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  errors,
  multiline,
}: FormFieldProps) {
  const hasError = Boolean(errors?.length);
  const errorId = `${name}-error`;

  const fieldClasses = `rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-orange-700 ${
    hasError ? "border-red-400" : "border-slate-300"
  }`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-bold text-slate-900">
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-orange-700">
            *
          </span>
        )}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={fieldClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={fieldClasses}
        />
      )}

      {hasError && (
        <p id={errorId} className="text-xs text-red-600">
          {errors?.[0]}
        </p>
      )}
    </div>
  );
}
