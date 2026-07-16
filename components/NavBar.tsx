import Link from "next/link";

/** ナビ項目（ハンバーガー廃止・常時表示） */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/profile#about" },
  { label: "Contact", href: "/profile#contact" },
] as const;

/** バーの高さ（px）。各ページの main の上余白（pt-14）と必ず揃えること */
export const NAVBAR_H = 56;

/**
 * 上部固定のダークバー。
 * SP のトップページと、プロフィール／作品詳細ページ（全サイズ）で共用する。
 *
 * @postcondition 画面上部に固定表示され、スクロールしてもナビが消えない。
 * @invariant ワードマークはホームへのリンク（装飾テキストは aria-hidden）。
 */
export default function NavBar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-40 h-14"
      style={{ backgroundColor: "var(--color-sidebar)" }}
    >
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="ホームへ" className="shrink-0">
          <span
            aria-hidden="true"
            className="select-none uppercase text-[16px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-white)",
              letterSpacing: "0.06em",
            }}
          >
            Portfolio
          </span>
        </Link>

        <nav
          aria-label="サイトナビゲーション"
          className="flex gap-3.5 md:gap-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] md:text-[13px] tracking-[0.06em] hover:opacity-60 transition-opacity"
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
      </div>
    </div>
  );
}
