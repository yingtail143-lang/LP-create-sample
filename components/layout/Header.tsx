import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#problem", label: "悩み" },
  { href: "#features", label: "特徴" },
  { href: "#trainers", label: "トレーナー" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
];

/**
 * サイト共通ヘッダー。ロゴ／ブランド名はプレースホルダーのため、
 * 実際の屋号・ロゴへ差し替えること。
 * スマホではナビ・CTAボタンを隠し、ブランド名のみの最小表示にする
 * （CTAは下部固定の StickyMobileCta が担う）。
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3 sm:px-10">
        <Link
          href="#hero"
          className="text-lg font-bold tracking-wide text-slate-900"
        >
          PERSONAL GYM
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttonが常時 inline-flex を持つため、表示切り替えはラッパー側で行う */}
        <div className="hidden sm:block">
          <Button href="#contact">無料相談</Button>
        </div>
      </div>
    </header>
  );
}
