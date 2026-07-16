import LoadingIntro from "@/components/LoadingIntro";
import Sidebar from "@/components/Sidebar";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <>
      <LoadingIntro />
      <Sidebar />
      <main
        className="pt-14 md:pt-0 md:pl-64 lg:pl-70"
        style={{ minHeight: "100dvh" }}
      >
        <WorksSection />
      </main>
      {/* SP 用フッター（PC はサイドバー下部に © あり） */}
      <footer
        className="md:hidden px-5 py-8"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <p
          className="text-[11px] tracking-[0.06em]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-soft)",
          }}
        >
          © 2026 Misaki Mochizuki
        </p>
      </footer>
    </>
  );
}
