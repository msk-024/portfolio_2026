import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Profile | Misaki Mochizuki",
  description: "望月みさきのプロフィール・経歴・スキル・お問い合わせ",
};

const career = [
  "看護師として医療現場に従事",
  "子供の誕生とプログラミング学習が必修になったことをきっかけにWeb制作を学び始める",
  "産業看護師をしながらフリーランスとしてWeb制作を開始",
  "Webアプリ開発・AI活用の学習と制作を継続",
] as const;

const canDo = [
  "Webアプリ開発",
  "Webサイト制作",
  "WordPress構築",
  "LP制作",
  "UI設計",
  "イラスト制作",
] as const;

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Markup / Styling",
    items: ["HTML", "CSS", "SCSS", "BEM"],
  },
  {
    label: "Backend / CMS",
    items: ["Node.js", "Supabase", "WordPress", "PHP"],
  },
  {
    label: "Design",
    items: ["Figma", "Illustrator", "Photoshop", "Fresco", "Canva"],
  },
  {
    label: "AI",
    items: ["Claude API", "Google Gemini", "Codex"],
  },
] as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <p
      className="text-[11px] tracking-[4px] uppercase mb-6"
      style={{
        fontFamily: "var(--font-display)",
        color: "var(--color-text-soft)",
      }}
    >
      {children}
    </p>
  );
}

export default function ProfilePage() {
  return (
    <>
      <NavBar />
      <main id="about" className="pt-14" style={{ minHeight: "100dvh" }}>
        <div className="px-4 md:px-6 max-w-300 mx-auto py-12 md:py-20">
          <div className="md:grid md:grid-cols-[240px_1fr] md:gap-16">
            {/* ─── 左: プロフィール概要 ───────────── */}
            <aside className="mb-14 md:mb-0">
              <div className="md:sticky md:top-24">
                <SectionLabel>Profile</SectionLabel>
                <h1
                  className="text-[24px] leading-[1.3] tracking-[0.02em] mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  Misaki Mochizuki
                </h1>
                <p
                  className="text-[13px] tracking-[0.06em] mb-7"
                  style={{
                    fontFamily: "var(--font-jp)",
                    color: "var(--color-text-soft)",
                  }}
                >
                  望月 美咲
                </p>
                <p
                  className="text-[14px] leading-[1.9] tracking-[0.06em] mb-8"
                  style={{
                    fontFamily: "var(--font-jp)",
                    color: "var(--color-text-soft)",
                  }}
                >
                  看護師としての経験を活かし、
                  <br />
                  Web制作・アプリ開発・AI活用で、
                  <br />
                  「伝える」「使いやすい」「役に立つ」
                  <br />
                  ものをつくっています。
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] tracking-[1px] hover:opacity-50 transition-opacity w-fit"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text-soft)",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    GitHub →
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] tracking-[1px] hover:opacity-50 transition-opacity w-fit"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text-soft)",
                      transitionDuration: "var(--duration-fast)",
                    }}
                  >
                    Instagram →
                  </a>
                </div>
              </div>
            </aside>

            {/* ─── 右: コンテンツ ────────────────── */}
            <div className="flex flex-col gap-16">
              {/* Career */}
              <section aria-label="経歴">
                <SectionLabel>Career</SectionLabel>
                <div role="list">
                  {career.map((item, i) => (
                    <div
                      key={item}
                      role="listitem"
                      className="flex gap-5 py-4"
                      style={{ borderTop: "1px solid var(--color-border)" }}
                    >
                      <span
                        className="text-[11px] pt-0.5 shrink-0 tabular-nums"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--color-text-soft)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-[14px] leading-[1.8] tracking-[0.06em]"
                        style={{
                          fontFamily: "var(--font-jp)",
                          color: "var(--color-text)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                  <div
                    aria-hidden="true"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  />
                </div>
              </section>

              {/* What I can do */}
              <section aria-label="できること">
                <SectionLabel>What I can do</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {canDo.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] tracking-[0.04em] px-4 py-1.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-jp)",
                        color: "var(--color-text)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section aria-label="スキル">
                <SectionLabel>Skills</SectionLabel>
                <div className="flex flex-col gap-6">
                  {skillGroups.map((group) => (
                    <div key={group.label}>
                      <p
                        className="text-[10px] tracking-[2px] uppercase mb-2.5"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--color-text-soft)",
                        }}
                      >
                        {group.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] tracking-[0.5px] px-3 py-1 rounded-full"
                            style={{
                              fontFamily: "var(--font-display)",
                              color: "var(--color-text-soft)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact */}
              <section id="contact" aria-label="お問い合わせ">
                <SectionLabel>Contact</SectionLabel>
                <p
                  className="text-[14px] leading-[1.9] tracking-[0.06em] mb-8"
                  style={{
                    fontFamily: "var(--font-jp)",
                    color: "var(--color-text-soft)",
                  }}
                >
                  制作のご相談・ご依頼は、
                  <br />
                  メールよりお気軽にご連絡ください。
                </p>
                <a
                  href="mailto:mo990.moch1@gmail.com"
                  aria-label="メールでお問い合わせする"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "var(--font-jp)",
                    backgroundColor: "var(--color-dark)",
                    color: "var(--color-white)",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    transitionDuration: "var(--duration-fast)",
                  }}
                >
                  メールで相談する
                </a>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
