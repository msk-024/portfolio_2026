import type { Work } from "@/types/work";
import Image from "next/image";
import Link from "next/link";

type Props = {
  work: Work;
  /** ファーストビューに入るカードは true（LCP 改善のため先読みする） */
  priority?: boolean;
};

export default function WorkCard({ work, priority = false }: Props) {
  const isPlaceholder = work.image.includes("placeholder");

  return (
    <article
      className="group relative h-full bg-white border flex flex-col rounded-[22px] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      style={{
        borderColor: "var(--color-border)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      {/* 画像エリア — SP は 16:9 固定、PC(グリッド) はセル高に合わせて伸縮 */}
      <div className="relative aspect-video md:aspect-auto md:flex-1 md:min-h-0">
        {isPlaceholder ? (
          <div
            className="absolute inset-0"
            role="img"
            aria-label={`${work.title} のサムネイル（準備中）`}
            style={{ backgroundColor: "var(--color-border)" }}
          />
        ) : (
          <Image
            src={work.image}
            alt={`${work.title} のサムネイル`}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 250px"
          />
        )}

        {/* カテゴリバッジ */}
        <span
          className="absolute top-2.5 left-2.5 text-[9px] tracking-[1px] uppercase px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: "var(--color-dark)",
            color: "var(--color-white)",
            fontFamily: "var(--font-ui)",
          }}
        >
          {work.category}
        </span>
      </div>

      {/* テキストエリア — 高さが足りなくても削られないよう固定 */}
      <div className="flex shrink-0 flex-col gap-2 p-4">
        <h3
          className="text-[15px] leading-[1.4] tracking-[0.02em]"
          style={{ fontFamily: "var(--font-jp)", color: "var(--color-text)" }}
        >
          {work.title}
        </h3>

        {/* リンク — カード全体が詳細（または外部サイト）への1リンク。Demo/GitHub は詳細ページへ集約 */}
        <div
          className="flex items-center justify-between mt-auto pt-2.5 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          {work.externalUrl != null ? (
            <a
              href={work.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${work.title} を別サイトで見る`}
              className="flex w-full items-center justify-between text-[12px] tracking-[0.5px] after:absolute after:inset-0 after:content-['']"
              style={{
                fontFamily: "var(--font-ui)",
                color: "var(--color-text)",
              }}
            >
              <span>サイトを見る</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          ) : (
            <Link
              href={`/works/${work.slug}`}
              aria-label={`${work.title} の詳細を見る`}
              className="flex w-full items-center justify-between text-[12px] tracking-[0.5px] after:absolute after:inset-0 after:content-['']"
              style={{
                fontFamily: "var(--font-ui)",
                color: "var(--color-text)",
              }}
            >
              <span>詳細を見る</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
