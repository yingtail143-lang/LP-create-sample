export type Problem = {
  title: string;
  description: string;
};

/** 「悩み」セクションで共感を呼ぶための、ターゲット層(30〜50代の運動不足会社員)特有の悩み一覧 */
export const problems: Problem[] = [
  {
    title: "忙しくて運動する時間がない",
    description:
      "仕事や家庭のことで毎日が精一杯。ジムに通う時間も気力も残っていない。",
  },
  {
    title: "一人だと続かない",
    description:
      "何度もダイエットや筋トレに挑戦したけれど、三日坊主で終わってしまう。",
  },
  {
    title: "何をすればいいか分からない",
    description:
      "自己流のトレーニングや食事制限を試しても、思うように結果が出ない。",
  },
  {
    title: "昔より痩せにくくなった",
    description:
      "代謝が落ちて、若い頃と同じことをしても体型がなかなか変わらない。",
  },
];
