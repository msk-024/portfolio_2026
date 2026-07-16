import Link from "next/link";
import NavBar, { NAV_LINKS } from "@/components/NavBar";

const COPYRIGHT = "© 2026 Misaki Mochizuki";

/**
 * トップページのナビゲーション。
 * PC: 画面左の固定ダークサイドバー / SP: 共通の上部固定ダークバー（NavBar）。
 *
 * @invariant アクセシブルな見出し h1 は 1 つだけ（sr-only）。装飾ワードマークは aria-hidden。
 */
export default function Sidebar() {
  const nav = (
    <nav aria-label="サイトナビゲーション" className="flex flex-col gap-3">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="w-fit text-[15px] tracking-[0.08em] hover:opacity-60 transition-opacity"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-white)",
            transitionDuration: "var(--duration-fast)",
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      {/* アクセシビリティ用の見出し（視覚的にはワードマークが担う） */}
      <h1 className="sr-only">Portfolio — Misaki Mochizuki</h1>

      {/* ── PC: 左固定サイドバー ───────────────────────────── */}
      <aside
        className="hidden md:flex fixed inset-y-0 left-0 z-40 w-64 lg:w-70 flex-col justify-between px-7 lg:px-9 py-12 lg:py-14"
        style={{ backgroundColor: "var(--color-sidebar)" }}
      >
        <div>
          <Link href="/" aria-label="ホームへ" className="block w-fit">
            <span
              aria-hidden="true"
              className="block select-none uppercase"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-white)",
                fontSize: "clamp(40px, 4vw, 62px)",
                lineHeight: 1.04,
                letterSpacing: "0.01em",
              }}
            >
              Port-
              <br />
              folio
            </span>
          </Link>
          <p
            className="mt-6 text-[14px] tracking-widest"
            style={{
              fontFamily: "var(--font-display)",
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            Misaki Mochizuki
          </p>
          <div className="mt-12 lg:mt-14">{nav}</div>
        </div>

        <p
          className="text-[11px] tracking-[0.06em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(255, 255, 255, 0.45)",
          }}
        >
          {COPYRIGHT}
        </p>
      </aside>

      {/* ── SP: 共通の上部固定ダークバー（他ページと同じ見た目） ── */}
      <div className="md:hidden">
        <NavBar />
      </div>
    </>
  );
}
