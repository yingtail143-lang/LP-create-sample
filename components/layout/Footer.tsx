import Link from "next/link";

const quickLinks = [
  { href: "#problem", label: "悩み" },
  { href: "#features", label: "特徴" },
  { href: "#trainers", label: "トレーナー" },
  { href: "#pricing", label: "料金" },
  { href: "#voice", label: "利用者の声" },
  { href: "#faq", label: "FAQ" },
];

/**
 * サイト共通フッター。ブランド名はプレースホルダー。
 * プライバシーポリシー／特定商取引法に基づく表記は、実ページを
 * 用意した上でリンク先（現状は "#"）を差し替えること。
 * 個人情報を取得するお問い合わせフォームを持つ以上、これらのページが
 * 無い状態で公開しないこと。
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-400 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg font-bold text-white">PERSONAL GYM</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} PERSONAL GYM. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-white">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
