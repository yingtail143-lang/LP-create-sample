"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

/**
 * FAQ用の開閉アコーディオン。
 * 開閉状態のみをClient側で持ち、質問・回答の文言は親のServer Componentから渡す。
 */
export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-bold text-slate-900">
                {item.question}
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-xl leading-none font-bold text-orange-700 transition-transform duration-150 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                className="px-6 pb-5 text-sm leading-relaxed text-slate-600"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
