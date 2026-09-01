import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/** 特徴・トレーナー・料金・悩み等、各セクションのカードUIの共通の土台 */
export default function Card({ children, className }: CardProps) {
  const classes = [
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
