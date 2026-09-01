type Align = "center" | "left";
type Tone = "light" | "dark";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  tone?: Tone;
};

const alignClasses: Record<Align, string> = {
  center: "items-center text-center",
  left: "items-start text-left",
};

const toneClasses: Record<Tone, { title: string; description: string; eyebrow: string }> = {
  light: {
    title: "text-slate-900",
    description: "text-slate-600",
    eyebrow: "text-orange-600",
  },
  dark: {
    title: "text-white",
    description: "text-slate-300",
    eyebrow: "text-orange-300",
  },
};

/** 各セクション冒頭で使う見出し＋リード文の共通レイアウト */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const colors = toneClasses[tone];

  return (
    <div className={`flex flex-col gap-3 ${alignClasses[align]}`}>
      {eyebrow && (
        <span
          className={`text-sm font-bold tracking-widest ${colors.eyebrow}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl ${colors.title}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${colors.description}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
