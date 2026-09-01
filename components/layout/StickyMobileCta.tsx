"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

/**
 * スマホ表示時のみ表示する下部固定CTAバー。離脱防止のため常時表示するが、
 * #contact セクション（フォーム本体のCTA）が画面に入ったら重複表示を避けて隠す。
 */
export default function StickyMobileCta() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pt-3 backdrop-blur transition-transform duration-200 sm:hidden ${
        isContactVisible ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <Button href="#contact" size="lg" className="w-full">
        無料カウンセリングを予約する
      </Button>
    </div>
  );
}
