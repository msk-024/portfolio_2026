import GalleryImage from "@/components/GalleryImage";
import type { GalleryItem, Work } from "@/types/work";

/**
 * 画像タイプごとの表示バケットを決める。
 * - full:   全幅で縦に積む（hero / mockup / full）
 * - screen: スマホ縦画面を横スクロールで並べる（screen）
 * - grid:   横長・正方形をグリッドで並べる（page / design）
 */
function bucketOf(
  item: GalleryItem,
): "full" | "mobile" | "poster" | "screen" | "grid" {
  if (item.type === "hero" || item.type === "mockup" || item.type === "full") {
    return "full";
  }
  if (item.type === "mobile") return "mobile";
  if (item.type === "poster") return "poster";
  if (item.type === "screen") return "screen";
  return "grid";
}

function GalleryFigure({ item, sizes }: { item: GalleryItem; sizes?: string }) {
  return (
    <figure>
      <GalleryImage item={item} sizes={sizes} />
      <figcaption className="mt-2.5">
        <p
          className="text-[12px] tracking-[0.04em]"
          style={{ fontFamily: "var(--font-jp)", color: "var(--color-text)" }}
        >
          {item.title}
        </p>
        {item.description && (
          <span
            className="text-[11px] leading-[1.7] tracking-[0.04em]"
            style={{
              fontFamily: "var(--font-jp)",
              color: "var(--color-text-soft)",
            }}
          >
            {item.description}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * 作品詳細ページのギャラリー。
 *
 * @postcondition 画像タイプごとに最適なレイアウトで表示する：
 *                hero/mockup/full=全幅、screen=横スクロール、page/design=2列グリッド
 * @invariant gallery が空なら何も描画しない
 */
export default function WorkGallery({ work }: { work: Work }) {
  if (work.gallery.length === 0) return null;

  const fullItems = work.gallery.filter((i) => bucketOf(i) === "full");
  const mobileItems = work.gallery.filter((i) => bucketOf(i) === "mobile");
  const posterItems = work.gallery.filter((i) => bucketOf(i) === "poster");
  const screenItems = work.gallery.filter((i) => bucketOf(i) === "screen");
  const gridItems = work.gallery.filter((i) => bucketOf(i) === "grid");

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* 全幅（メインビジュアル・モック・縦長LP） */}
      {fullItems.map((item) => (
        <GalleryFigure key={`${item.type}-${item.title}`} item={item} />
      ))}

      {/* スマホ向けLP: 実機くらいの幅で中央寄せ・全体表示 */}
      {mobileItems.map((item) => (
        <div
          key={`${item.type}-${item.title}`}
          className="mx-auto w-full max-w-80"
        >
          <GalleryFigure item={item} sizes="(max-width: 400px) 90vw, 320px" />
        </div>
      ))}

      {/* チラシ・ポスター: やや広めの幅で中央寄せ・全体表示 */}
      {posterItems.map((item) => (
        <div
          key={`${item.type}-${item.title}`}
          className="mx-auto w-full max-w-md"
        >
          <GalleryFigure item={item} sizes="(max-width: 520px) 90vw, 448px" />
        </div>
      ))}

      {/* スマホ画面: 横並び（画面幅を超えたら横スクロール = App Store風） */}
      {screenItems.length > 0 && (
        <div
          className="flex gap-4 md:gap-5 overflow-x-auto pb-2"
          tabIndex={0}
          role="group"
          aria-label="アプリ画面（横スクロールで閲覧できます）"
        >
          {screenItems.map((item) => (
            <div
              key={`${item.type}-${item.title}`}
              className="shrink-0 w-47.5 sm:w-52.5"
            >
              <GalleryFigure
                item={item}
                sizes="(max-width: 640px) 60vw, 210px"
              />
            </div>
          ))}
        </div>
      )}

      {/* 横長画面・デザイン作品: 2列グリッド */}
      {gridItems.length > 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {gridItems.map((item) => (
            <GalleryFigure
              key={`${item.type}-${item.title}`}
              item={item}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ))}
        </div>
      )}
    </div>
  );
}
