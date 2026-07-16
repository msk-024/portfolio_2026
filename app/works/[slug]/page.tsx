import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import GridBackground from "@/components/GridBackground";
import NavBar from "@/components/NavBar";
import WorkGallery from "@/components/WorkGallery";
import { works } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

// externalUrl を持つ作品（例: イラスト）は詳細ページを生成しない。
// dynamicParams = false により、生成対象外の slug は 404 になる。
export const dynamicParams = false;

export function generateStaticParams() {
  return works
    .filter((w) => w.externalUrl == null)
    .map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | Misaki Mochizuki`,
    description: work.overview,
  };
}

// ── 共通ヘルパー ────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <p
      className="text-[11px] tracking-[4px] uppercase mb-4"
      style={{
        fontFamily: "var(--font-display)",
        color: "var(--color-text-soft)",
      }}
    >
      {children}
    </p>
  );
}

function BodyText({ children }: { children: string }) {
  return (
    <p
      className="text-[14px] leading-[1.9] tracking-[0.06em]"
      style={{ fontFamily: "var(--font-jp)", color: "var(--color-text-soft)" }}
    >
      {children}
    </p>
  );
}

// ── ページ本体 ───────────────────────────────────────────────
// 全タイプ共通の流れ: Overview → Role → Gallery → Challenge → Solution → Tech/Tools → Links
// Gallery の見せ方だけ WorkGallery が work.type に応じて切り替える

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  // externalUrl を持つ作品は詳細ページを持たない
  if (!work || work.externalUrl != null) notFound();

  const isGallery = work.type === "design" || work.type === "illustration";
  const isWordpress = work.type === "wordpress";
  const techLabel = isGallery ? "Tools" : "Tech Stack";

  return (
    <>
      <NavBar />
      <main className="pt-14 pb-20 md:pb-28" style={{ minHeight: "100dvh" }}>
        {/* 上部 Hero エリア（グリッド背景つき） */}
        <div className="relative overflow-hidden">
          <GridBackground />
          <div className="px-4 md:px-6 max-w-300 mx-auto">
            {/* 戻るリンク */}
            <div className="pt-8 md:pt-10 mb-10 md:mb-14">
              <Link
                href="/#works"
                className="text-[12px] tracking-[1px] hover:opacity-50 transition-opacity"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-soft)",
                  transitionDuration: "var(--duration-fast)",
                }}
              >
                ← Portfolio
              </Link>
            </div>

            {/* ページヘッダー（Overview） */}
            <header className="mb-10 md:mb-14">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="text-[9px] tracking-[1px] uppercase px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "var(--color-dark)",
                    color: "var(--color-white)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {work.category}
                </span>
                {work.period && (
                  <span
                    className="text-[12px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text-soft)",
                    }}
                  >
                    {work.period}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-6">
                {/* アプリはタイトル横にアイコンを表示（App Store風） */}
                {work.icon != null && (
                  <div
                    className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-2xl border"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Image
                      src={work.icon}
                      alt={`${work.title} のアイコン`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                )}
                <h1
                  className="leading-[1.2] tracking-[0.02em]"
                  style={{
                    fontFamily: "var(--font-jp)",
                    color: "var(--color-text)",
                    fontSize: "clamp(24px, 3.5vw, 44px)",
                  }}
                >
                  {work.title}
                </h1>
              </div>

              <p
                className="text-[14px] md:text-[15px] leading-[1.9] tracking-[0.06em]"
                style={{
                  fontFamily: "var(--font-jp)",
                  color: "var(--color-text-soft)",
                }}
              >
                {work.overview}
              </p>

              {/* アクション（デモ/実サイト = 目立つボタン、GitHub = 副次リンク）App Store風にタイトル近くへ */}
              {(work.demoUrl != null || work.githubUrl != null) && (
                <div className="mt-6 md:mt-7">
                  <div className="flex flex-wrap items-center gap-5">
                    {work.demoUrl != null && (
                      <a
                        href={work.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${work.title} の${isWordpress ? "実サイト" : "デモ"}を見る`}
                        className="inline-flex items-center justify-center px-7 py-2.5 rounded-full hover:opacity-70 transition-opacity"
                        style={{
                          fontFamily: "var(--font-jp)",
                          backgroundColor: "var(--color-dark)",
                          color: "var(--color-white)",
                          fontSize: "14px",
                          letterSpacing: "0.06em",
                          transitionDuration: "var(--duration-fast)",
                        }}
                      >
                        {isWordpress ? "サイトを見る" : "デモを見る"} →
                      </a>
                    )}
                    {work.githubUrl != null && (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${work.title} の GitHub リポジトリを見る`}
                        className="text-[13px] tracking-[1px] hover:opacity-50 transition-opacity"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--color-text)",
                          transitionDuration: "var(--duration-fast)",
                        }}
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                  {work.demoUrl != null && work.demoNote != null && (
                    <p
                      className="text-[11px] leading-[1.7] tracking-[0.04em] mt-3"
                      style={{
                        fontFamily: "var(--font-jp)",
                        color: "var(--color-text-soft)",
                      }}
                    >
                      ※ {work.demoNote}
                    </p>
                  )}
                </div>
              )}
            </header>
          </div>
        </div>

        <div className="px-4 md:px-6 max-w-300 mx-auto">
          {/* 担当範囲 */}
          {work.role && (
            <section className="mb-10 md:mb-12" aria-label="担当範囲">
              <SectionLabel>Role</SectionLabel>
              <BodyText>{work.role}</BodyText>
            </section>
          )}

          {/* ギャラリー */}
          {work.gallery.length > 0 && (
            <section className="mb-12 md:mb-16" aria-label="ギャラリー">
              <SectionLabel>Gallery</SectionLabel>
              <WorkGallery work={work} />
            </section>
          )}

          {/* 課題 */}
          {work.challenge && (
            <section className="mb-10 md:mb-12" aria-label="課題">
              <SectionLabel>Challenge</SectionLabel>
              <BodyText>{work.challenge}</BodyText>
            </section>
          )}

          {/* アプローチ */}
          {work.solution && (
            <section className="mb-10 md:mb-12" aria-label="アプローチ">
              <SectionLabel>Solution</SectionLabel>
              <BodyText>{work.solution}</BodyText>
            </section>
          )}

          {/* 技術スタック / ツール（全 type 共通） */}
          <section
            className="mb-10 md:mb-12"
            style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: "32px",
            }}
            aria-label="技術スタック"
          >
            <SectionLabel>{techLabel}</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {work.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] tracking-[0.04em] px-3 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--color-text-soft)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
