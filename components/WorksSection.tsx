"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { works, type WorkCategoryFilter } from "@/data/works";
import WorksFilter from "@/components/WorksFilter";
import WorkCard from "@/components/WorkCard";

/** カード幅（px）。高さは画面高を 2 段で分けるため可変 */
const CARD_W = 250;
const CARD_GAP = 24;

/** トラック左右の余白（px） */
const TRACK_LEFT = 40;
const TRACK_RIGHT = 60;

/** Spring パラメータ（横移動の慣性感） */
const SPRING = { stiffness: 120, damping: 30, restDelta: 0.001 };

export default function WorksSection() {
  const [activeCategory, setActiveCategory] =
    useState<WorkCategoryFilter>("すべて");
  const [scrollDist, setScrollDist] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredWorks =
    activeCategory === "すべて"
      ? works
      : works.filter((w) => w.category === activeCategory);

  /**
   * 2 段グリッドの総幅 − 表示領域幅 = 横移動が必要な距離。
   * 列数 = ceil(作品数 / 2)。フィルター変化・リサイズで再計算。
   */
  useEffect(() => {
    const calc = () => {
      const columns = Math.ceil(filteredWorks.length / 2);
      const trackW =
        TRACK_LEFT +
        columns * CARD_W +
        Math.max(0, columns - 1) * CARD_GAP +
        TRACK_RIGHT;
      const visible = viewportRef.current?.clientWidth ?? window.innerWidth;
      setScrollDist(Math.max(0, trackW - visible));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [filteredWorks.length]);

  const stickyH = "100vh";
  const outerH = `calc(100vh + ${scrollDist}px)`;

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -scrollDist]);
  const xSpring = useSpring(xRaw, SPRING);
  const x = shouldReduceMotion ? xRaw : xSpring;

  const noAnim = shouldReduceMotion ?? false;
  const isEmpty = filteredWorks.length === 0;

  const emptyMessage = (
    <p
      className="py-20 text-center text-[13px]"
      style={{ fontFamily: "var(--font-jp)", color: "var(--color-text-soft)" }}
    >
      該当する作品がありません
    </p>
  );

  return (
    <section id="works" aria-label="作品一覧">
      {/* ── PC: 2段グリッドを 縦スクロール→横移動 で見せる（1画面完結） ── */}
      <div
        ref={outerRef}
        className="hidden md:block"
        style={{ height: scrollDist > 0 ? outerH : stickyH }}
      >
        <div
          ref={viewportRef}
          className="sticky top-0 flex flex-col overflow-hidden"
          style={{ height: stickyH }}
        >
          {/* カテゴリタブ */}
          <div className="shrink-0 px-10 pt-10 pb-4">
            <WorksFilter active={activeCategory} onChange={setActiveCategory} />
          </div>

          {/* カード（2段グリッド） — 下に余白を残す */}
          <div className="min-h-0 flex-1 overflow-hidden pb-10">
            {isEmpty ? (
              emptyMessage
            ) : (
              <motion.div
                style={{
                  x,
                  gridAutoColumns: `${CARD_W}px`,
                  paddingLeft: TRACK_LEFT,
                  paddingRight: TRACK_RIGHT,
                }}
                className="grid grid-flow-col grid-rows-2 gap-6 h-full"
              >
                {filteredWorks.map((work, i) => (
                  <motion.div
                    key={`${activeCategory}-${work.id}`}
                    className="h-full"
                    initial={{ opacity: noAnim ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={
                      noAnim
                        ? { duration: 0 }
                        : { duration: 0.25, ease: "easeOut" }
                    }
                  >
                    {/* 初期表示に入る左端の数枚は先読み（LCP 改善） */}
                    <WorkCard work={work} priority={i < 6} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ── SP: 縦スクロール（1列） ─────────────────────────── */}
      <div className="md:hidden px-5">
        <div className="pt-5 pb-1">
          <WorksFilter active={activeCategory} onChange={setActiveCategory} />
        </div>
        {isEmpty ? (
          emptyMessage
        ) : (
          <div className="flex flex-col gap-6 py-6">
            {filteredWorks.map((work, i) => (
              <motion.div
                key={`${activeCategory}-${work.id}`}
                initial={{ opacity: noAnim ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={
                  noAnim ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }
                }
              >
                {/* 初期表示に入る先頭カードは先読み（LCP 改善） */}
                <WorkCard work={work} priority={i < 1} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
