export type Feature = {
  title: string;
  description: string;
};

/** 「サービスの特徴」セクションで訴求する差別化ポイント */
export const features: Feature[] = [
  {
    title: "完全オーダーメイドの専属トレーニング",
    description:
      "体力レベル・目的・スケジュールに合わせて、専属トレーナーがマンツーマンでプログラムを設計します。",
  },
  {
    title: "深夜・早朝もOKの予約制",
    description:
      "仕事帰りや出勤前など、忙しい会社員のライフスタイルに合わせた時間帯で無理なく通えます。",
  },
  {
    title: "食事もLINEでサポート",
    description:
      "無理な食事制限はなし。日々の食事をLINEで報告するだけで、専属トレーナーがアドバイスします。",
  },
  {
    title: "数値で分かる成果管理",
    description:
      "体組成計での定期計測と写真記録で変化を「見える化」。モチベーションを維持しながら継続できます。",
  },
];
